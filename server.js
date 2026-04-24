import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
const port = process.env.PORT || 4000

const requiredVars = ['EMAIL_PASS']

const missingVars = requiredVars.filter((key) => !process.env[key])
if (missingVars.length > 0) {
  console.warn(`Missing environment variables for email sending: ${missingVars.join(', ')}`)
}

const smtpHost = process.env.EMAIL_HOST || 'smtp.nlag.in'
const smtpPort = Number(process.env.EMAIL_PORT) || 587
const smtpSecure = process.env.EMAIL_SECURE === 'true'
const smtpUser = process.env.EMAIL_USER || 'registration@nlag.in'
const smtpPass = process.env.EMAIL_PASS || ''
const emailFrom = process.env.EMAIL_FROM || '"New Life AG" <registration@nlag.in>'
const emailTo = process.env.EMAIL_TO || 'nlag@gmail.com'

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpSecure,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
})

const formatDate = (dateValue) => {
  if (!dateValue || !dateValue.day || !dateValue.month || !dateValue.year) {
    return 'Not provided'
  }
  return `${dateValue.day} ${dateValue.month} ${dateValue.year}`
}

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('New Life AG registration email API is running.')
})

app.post('/api/register', async (req, res) => {
  if (missingVars.length > 0) {
    return res.status(500).json({ message: 'Email configuration is incomplete on the server. EMAIL_PASS is required.' })
  }

  const data = req.body
  const {
    prefix,
    firstName,
    lastName,
    email,
    mobile,
    service,
    gender,
    maritalStatus,
    memberAnotherChurch,
    ministries,
    otherMinistry,
    remarks,
    memberId,
  } = data

  const ministryText = Array.isArray(ministries) ? ministries.join(', ') : ''
  const providedMinistries = ministries?.includes('Others')
    ? ministries.filter((item) => item !== 'Others').join(', ') + `, Others (${otherMinistry || 'Not specified'})`
    : ministryText || 'Not specified'

  const familyText = Array.isArray(data.familyMembers) && data.familyMembers.length > 0
    ? `<ul>${data.familyMembers
        .map(
          (member) => `<li><strong>${member.name || 'Unnamed'}</strong> — Email: ${member.email || 'N/A'}, Relationship: ${member.relationship || 'N/A'}, DOB: ${formatDate(member.dob)}</li>`,
        )
        .join('')}</ul>`
    : '<p>None</p>'

  const htmlBody = `
    <h2>New Membership Registration</h2>
    <h3>Member Details</h3>
    <p><strong>Member ID:</strong> ${memberId || 'Not generated'}</p>
    <p><strong>Name:</strong> ${prefix} ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email || 'Not provided'}</p>
    <p><strong>Mobile:</strong> ${mobile || 'Not provided'}</p>
    <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
    <p><strong>Service attended:</strong> ${service || 'Not specified'}</p>
    <p><strong>Gender:</strong> ${gender || 'Not specified'}</p>
    <p><strong>Marital status:</strong> ${maritalStatus || 'Not specified'}</p>
    <p><strong>Member of another church:</strong> ${memberAnotherChurch || 'Not specified'}</p>
    <h3>Address</h3>
    <p>${data.street || ''} ${data.address1 || ''} ${data.address2 || ''}</p>
    <p>${data.city || ''}, ${data.state || ''}, ${data.country || ''} ${data.postalCode || ''}</p>
    <h3>Additional Info</h3>
    <p><strong>Birth Date:</strong> ${formatDate(data.birthDate)}</p>
    <p><strong>Wedding Anniversary:</strong> ${formatDate(data.weddingAnniversary)}</p>
    <p><strong>Rank / Profession:</strong> ${data.rankProfession || 'Not provided'}</p>
    <p><strong>Education:</strong> ${data.education || 'Not provided'}</p>
    <p><strong>Employment:</strong> ${data.employment || 'Not provided'}</p>
    <p><strong>Date accepted Christ:</strong> ${formatDate(data.acceptedChristDate)}</p>
    <p><strong>Date of Water Baptism:</strong> ${formatDate(data.waterBaptismDate)}</p>
    <p><strong>Date of Holy Spirit Baptism:</strong> ${formatDate(data.holySpiritBaptismDate)}</p>
    <p><strong>Attending AG Since:</strong> ${formatDate(data.attendingAGSince)}</p>
    <p><strong>Bad habits:</strong> ${data.badHabits || 'None'}</p>
    <p><strong>Pray regularly:</strong> ${data.prayRegularly || 'Not specified'}</p>
    <p><strong>Read Bible regularly:</strong> ${data.bibleRegularly || 'Not specified'}</p>
    <p><strong>Regular attendance:</strong> ${data.regularAttendance || 'Not specified'}</p>
    <p><strong>Support tithes:</strong> ${data.supportTithes || 'Not specified'}</p>
    <h3>Ministry Preferences</h3>
    <p>${providedMinistries}</p>
    <h3>Family Members</h3>
    ${familyText}
    <h3>Remarks</h3>
    <p>${remarks || 'None'}</p>
    <p><strong>Photo file name:</strong> ${data.photo || 'Not uploaded'}</p>
  `

  try {
    await transporter.sendMail({
      from: emailFrom,
      to: emailTo,
      subject: `New AG registration: ${firstName} ${lastName}`,
      text: `New member registration from ${firstName} ${lastName}. Email: ${email}. Mobile: ${mobile}. Member ID: ${memberId || 'Not generated'}.`,
      html: htmlBody,
    })

    return res.status(200).json({ success: true, memberId })
  } catch (error) {
    console.error('Error sending registration email:', error)
    return res.status(500).json({ message: 'Failed to send registration email.' })
  }
})

app.listen(port, () => {
  console.log(`Registration email API listening on http://localhost:${port}`)
})
