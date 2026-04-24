import { useMemo, useState } from 'react'
import './App.css'

const prefixes = ['None', 'Mrs.', 'Ms.', 'Mr.', 'Dr.', 'Ps.', 'Sis.', 'Bro.', 'Rev.']

const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Comoros',
  'Congo (Congo-Brazzaville)',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czechia',
  'Democratic Republic of the Congo',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'North Korea',
  'North Macedonia',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine State',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Korea',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Sweden',
  'Switzerland',
  'Syria',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe',
]

const serviceOptions = [
  'None',
  'English Service @ Kompally',
  'English Service @ Diamond Point',
  'English Service @ HiTech City',
  'Hindi Service @ Kompally',
  'Hindi Service @ Diamond Point',
]

const maritalOptions = ['None', 'Single', 'Married', 'Widow', 'Widower', 'Separated', 'Divorced']
const ministryOptions = [
  'Sunday School',
  'MultiMedia (LCD)',
  'Sound',
  'Lights',
  'Video',
  'Welcome',
  'Library',
  'Worship',
  'Ushering',
  'Security',
  'Catering',
  'Choreography',
  'Others',
]

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const getInitialDate = () => ({ day: '', month: '', year: '' })
const socialMediaLinks = [
  { name: 'Website', url: 'https://newlifeag.in/' },
  { name: 'App', url: 'https://app.newlifeag.in/' },
  { name: 'Facebook', url: 'https://www.facebook.com/@newlifeaghyd/' },
  { name: 'YouTube', url: 'https://www.youtube.com/@NEWLIFEAGHYD' },
  { name: 'LinkedIn', url: 'https://in.linkedin.com/company/new-life-ag-church' },
]

function App() {
  const currentYear = new Date().getFullYear()
  const years = useMemo(
    () => Array.from({ length: 100 }, (_, index) => String(currentYear - index)),
    [currentYear],
  )
  const days = useMemo(() => Array.from({ length: 31 }, (_, index) => String(index + 1)), [])

  const [formData, setFormData] = useState({
    prefix: 'None',
    firstName: '',
    lastName: '',
    street: '',
    address1: '',
    address2: '',
    city: '',
    country: '',
    state: '',
    postalCode: '',
    email: '',
    mobile: '',
    phone: '',
    service: 'None',
    birthDate: getInitialDate(),
    gender: '',
    maritalStatus: 'None',
    weddingAnniversary: getInitialDate(),
    photo: null,
    rankProfession: '',
    education: '',
    employment: '',
    acceptedChristDate: getInitialDate(),
    waterBaptismDate: getInitialDate(),
    holySpiritBaptismDate: getInitialDate(),
    badHabits: '',
    prayRegularly: '',
    bibleRegularly: '',
    regularAttendance: '',
    supportTithes: '',
    memberAnotherChurch: '',
    attendingAGSince: getInitialDate(),
    ministries: [],
    otherMinistry: '',
    familyCount: 'None',
    familyMembers: [],
    remarks: '',
  })
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')
  const [submissionError, setSubmissionError] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [memberId, setMemberId] = useState('')

  const generateMemberId = () => `NLAG${currentYear}-${Math.floor(1000 + Math.random() * 9000)}`

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleDateChange = (name, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        [field]: value,
      },
    }))
  }

  const handlePhotoChange = (event) => {
    const file = event.target.files?.[0]
    if (!file) {
      return
    }

    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png']
    if (!allowedTypes.includes(file.type)) {
      setErrors((prev) => ({ ...prev, photo: 'Photo must be JPG, JPEG, or PNG.' }))
      return
    }
    if (file.size > 1024 * 1024) {
      setErrors((prev) => ({ ...prev, photo: 'Photo size must be 1MB or less.' }))
      return
    }

    setErrors((prev) => ({ ...prev, photo: '' }))
    setFormData((prev) => ({ ...prev, photo: file }))
  }

  const handleMinistryChange = (ministry) => {
    setFormData((prev) => {
      const exists = prev.ministries.includes(ministry)
      const ministries = exists
        ? prev.ministries.filter((item) => item !== ministry)
        : [...prev.ministries, ministry]
      return { ...prev, ministries, otherMinistry: ministries.includes('Others') ? prev.otherMinistry : '' }
    })
  }

  const handleFamilyCountChange = (event) => {
    const value = event.target.value
    const count = value === 'None' ? 0 : Number(value)
    setFormData((prev) => {
      const nextMembers = Array.from({ length: count }, (_, index) => {
        const existing = prev.familyMembers[index]
        return (
          existing || {
            name: '',
            email: '',
            dob: getInitialDate(),
            relationship: '',
          }
        )
      })

      return {
        ...prev,
        familyCount: value,
        familyMembers: nextMembers,
      }
    })
  }

  const handleFamilyMemberChange = (index, field, value) => {
    setFormData((prev) => {
      const updated = [...prev.familyMembers]
      updated[index] = { ...updated[index], [field]: value }
      return { ...prev, familyMembers: updated }
    })
  }

  const handleFamilyDobChange = (index, field, value) => {
    setFormData((prev) => {
      const updated = [...prev.familyMembers]
      updated[index] = {
        ...updated[index],
        dob: {
          ...updated[index].dob,
          [field]: value,
        },
      }
      return { ...prev, familyMembers: updated }
    })
  }

  const isDateComplete = (dateValue) => dateValue.day && dateValue.month && dateValue.year

  const validate = () => {
    const nextErrors = {}
    if (!formData.firstName.trim()) nextErrors.firstName = 'First Name is required.'
    if (!formData.lastName.trim()) nextErrors.lastName = 'Last Name is required.'
    if (!formData.city.trim()) nextErrors.city = 'City is required.'
    if (!formData.email.trim()) nextErrors.email = 'Email is required.'
    if (!formData.mobile.trim()) nextErrors.mobile = 'Mobile is required.'
    if (!isDateComplete(formData.birthDate)) nextErrors.birthDate = 'Birth Date is required.'
    if (!formData.gender) nextErrors.gender = 'Gender is required.'
    if (!formData.photo) nextErrors.photo = 'Photo is required.'
    if (formData.ministries.includes('Others') && !formData.otherMinistry.trim()) {
      nextErrors.otherMinistry = 'Please specify other ministry.'
    }
    if (formData.familyMembers.some((member) => !member.name.trim() || !member.relationship.trim())) {
      nextErrors.familyMembers = 'Fill Name and Relationship for all family members.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSuccessMessage('')
    setSubmissionError('')
    setMemberId('')

    if (!validate()) {
      return
    }

    const memberId = generateMemberId()
    const payload = {
      ...formData,
      memberId,
      photo: formData.photo ? formData.photo.name : '',
    }

    setIsSending(true)
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => null)
        throw new Error(errorData?.message || 'Unable to submit registration. Please try again later.')
      }

      setMemberId(memberId)
      setSuccessMessage(`Thank you! Your membership form has been submitted. Member ID: ${memberId}`)
    } catch (error) {
      setSubmissionError(error.message || 'Unable to send registration email.')
    } finally {
      setIsSending(false)
    }
  }

  const renderDateFields = (label, name, required = false) => (
    <div className="field-group">
      <label>
        {label}
        {required ? <span className="required"> *</span> : null}
      </label>
      <div className="date-grid">
        <select value={formData[name].day} onChange={(event) => handleDateChange(name, 'day', event.target.value)}>
          <option value="">Day</option>
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        <select
          value={formData[name].month}
          onChange={(event) => handleDateChange(name, 'month', event.target.value)}
        >
          <option value="">Month</option>
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
        <select value={formData[name].year} onChange={(event) => handleDateChange(name, 'year', event.target.value)}>
          <option value="">Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      {errors[name] ? <p className="error">{errors[name]}</p> : null}
    </div>
  )

  return (
    <main className="app-shell">
      <form className="membership-form" onSubmit={handleSubmit}>
        <section className="welcome-banner">
          <p className="welcome-kicker">Faith • Hope • Love</p>
          <h1 className="animated-title">Welcome, we are glad you are here</h1>
          <p className="welcome-subtext">
            "For where two or three gather in My name, there am I with them." - Matthew 18:20
          </p>
        </section>

        <header className="form-header">
          <h1>Online Membership Form</h1>
          <p className="subtitle">
            After you submit the form, we will generate a Member ID and print a Membership Card.
          </p>
          <h2>Preliminary Membership Form</h2>
        </header>

        <section className="form-section">
          <h3>Section 1: Basic Name Info</h3>
          <div className="grid grid-3">
            <div className="field-group">
              <label htmlFor="prefix">Prefix</label>
              <select id="prefix" name="prefix" value={formData.prefix} onChange={handleInputChange}>
                {prefixes.map((prefix) => (
                  <option key={prefix} value={prefix}>
                    {prefix}
                  </option>
                ))}
              </select>
            </div>
            <div className="field-group">
              <label htmlFor="firstName">
                First Name<span className="required"> *</span>
              </label>
              <input id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} />
              {errors.firstName ? <p className="error">{errors.firstName}</p> : null}
            </div>
            <div className="field-group">
              <label htmlFor="lastName">
                Last Name<span className="required"> *</span>
              </label>
              <input id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} />
              {errors.lastName ? <p className="error">{errors.lastName}</p> : null}
            </div>
          </div>
        </section>

        <section className="form-section">
          <h3>Section 2: Contact Information</h3>
          <div className="grid grid-2">
            <div className="field-group">
              <label htmlFor="street">Street / House No.</label>
              <input id="street" name="street" value={formData.street} onChange={handleInputChange} />
            </div>
            <div className="field-group">
              <label htmlFor="address1">Address Line 1</label>
              <input id="address1" name="address1" value={formData.address1} onChange={handleInputChange} />
            </div>
            <div className="field-group">
              <label htmlFor="address2">Address Line 2</label>
              <input id="address2" name="address2" value={formData.address2} onChange={handleInputChange} />
            </div>
            <div className="field-group">
              <label htmlFor="city">
                City<span className="required"> *</span>
              </label>
              <input id="city" name="city" value={formData.city} onChange={handleInputChange} />
              {errors.city ? <p className="error">{errors.city}</p> : null}
            </div>
            <div className="field-group">
              <label htmlFor="country">Country</label>
              <select id="country" name="country" value={formData.country} onChange={handleInputChange}>
                <option value="">Select country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="field-group">
              <label htmlFor="state">State / Province</label>
              <input id="state" name="state" value={formData.state} onChange={handleInputChange} />
            </div>
            <div className="field-group">
              <label htmlFor="postalCode">Postal Code</label>
              <input id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleInputChange} />
            </div>
            <div className="field-group">
              <label htmlFor="email">
                Email<span className="required"> *</span>
              </label>
              <input id="email" type="email" name="email" value={formData.email} onChange={handleInputChange} />
              {errors.email ? <p className="error">{errors.email}</p> : null}
            </div>
            <div className="field-group">
              <label htmlFor="mobile">
                Mobile<span className="required"> *</span>
              </label>
              <input id="mobile" type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} />
              {errors.mobile ? <p className="error">{errors.mobile}</p> : null}
            </div>
            <div className="field-group">
              <label htmlFor="phone">Phone</label>
              <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />
            </div>
            <div className="field-group field-wide">
              <label htmlFor="service">Which Church Service do you usually attend?</label>
              <select id="service" name="service" value={formData.service} onChange={handleInputChange}>
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        <section className="form-section">
          <h3>Section 3: Personal Information</h3>
          <div className="grid grid-2">
            {renderDateFields('Birth Date', 'birthDate', true)}
            <div className="field-group">
              <label htmlFor="gender">
                Gender<span className="required"> *</span>
              </label>
              <select id="gender" name="gender" value={formData.gender} onChange={handleInputChange}>
                <option value="">Select</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
              {errors.gender ? <p className="error">{errors.gender}</p> : null}
            </div>
            <div className="field-group">
              <label htmlFor="maritalStatus">Marital Status</label>
              <select
                id="maritalStatus"
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleInputChange}
              >
                {maritalOptions.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
            {renderDateFields('Wedding Anniversary', 'weddingAnniversary')}
            <div className="field-group field-wide">
              <label htmlFor="photo">
                Upload Photo<span className="required"> *</span>
              </label>
              <input id="photo" type="file" accept=".jpg,.jpeg,.png" onChange={handlePhotoChange} />
              <small>Passport-style picture recommended. Used for Membership Card.</small>
              {errors.photo ? <p className="error">{errors.photo}</p> : null}
            </div>
          </div>
        </section>

        <section className="form-section">
          <h3>Section 4: Professional Info</h3>
          <div className="grid grid-3">
            <div className="field-group">
              <label htmlFor="rankProfession">Rank or Profession</label>
              <input
                id="rankProfession"
                name="rankProfession"
                value={formData.rankProfession}
                onChange={handleInputChange}
              />
            </div>
            <div className="field-group">
              <label htmlFor="education">Education</label>
              <input id="education" name="education" value={formData.education} onChange={handleInputChange} />
            </div>
            <div className="field-group">
              <label htmlFor="employment">Place of Employment</label>
              <input id="employment" name="employment" value={formData.employment} onChange={handleInputChange} />
            </div>
          </div>
        </section>

        <section className="form-section">
          <h3>Section 5: Christian Details</h3>
          <p className="helper-text">
            If you do not remember the day, use 01. If you do not remember the month, use January.
          </p>
          <div className="grid grid-2">
            {renderDateFields('Date accepted Jesus Christ as Savior / Born Again', 'acceptedChristDate')}
            {renderDateFields('Date of Water Baptism by Immersion', 'waterBaptismDate')}
            {renderDateFields(
              'Date of Holy Spirit Baptism with speaking in Tongues',
              'holySpiritBaptismDate',
            )}
            {renderDateFields('Since when are you attending AG Church?', 'attendingAGSince')}
            <div className="field-group field-wide">
              <label htmlFor="badHabits">Do you have any bad habits?</label>
              <textarea id="badHabits" name="badHabits" rows={3} value={formData.badHabits} onChange={handleInputChange} />
            </div>
            <div className="field-group">
              <label>Do you pray on a regular basis?</label>
              <div className="inline-options">
                {['Yes', 'No'].map((value) => (
                  <label key={value}>
                    <input
                      type="radio"
                      name="prayRegularly"
                      value={value}
                      checked={formData.prayRegularly === value}
                      onChange={handleInputChange}
                    />
                    {value}
                  </label>
                ))}
              </div>
            </div>
            <div className="field-group">
              <label>Do you read the Holy Bible regularly?</label>
              <div className="inline-options">
                {['Yes', 'No'].map((value) => (
                  <label key={value}>
                    <input
                      type="radio"
                      name="bibleRegularly"
                      value={value}
                      checked={formData.bibleRegularly === value}
                      onChange={handleInputChange}
                    />
                    {value}
                  </label>
                ))}
              </div>
            </div>
            <div className="field-group">
              <label>Are you regular in attendance to our Church Services?</label>
              <div className="inline-options">
                {['Yes', 'No'].map((value) => (
                  <label key={value}>
                    <input
                      type="radio"
                      name="regularAttendance"
                      value={value}
                      checked={formData.regularAttendance === value}
                      onChange={handleInputChange}
                    />
                    {value}
                  </label>
                ))}
              </div>
            </div>
            <div className="field-group">
              <label>
                Do you (or your parents/spouse) faithfully support our Church with Tithes and Offerings?
              </label>
              <div className="inline-options">
                {['Yes', 'No'].map((value) => (
                  <label key={value}>
                    <input
                      type="radio"
                      name="supportTithes"
                      value={value}
                      checked={formData.supportTithes === value}
                      onChange={handleInputChange}
                    />
                    {value}
                  </label>
                ))}
              </div>
            </div>
            <div className="field-group field-wide">
              <label htmlFor="memberAnotherChurch">Are you a member of another Church?</label>
              <input
                id="memberAnotherChurch"
                name="memberAnotherChurch"
                value={formData.memberAnotherChurch}
                onChange={handleInputChange}
                placeholder="Yes / No or Church name"
              />
            </div>
          </div>
        </section>

        <section className="form-section">
          <h3>Section 6: Available to Help In (Ministry Areas)</h3>
          <div className="checkbox-grid">
            {ministryOptions.map((item) => (
              <label key={item} className="checkbox-item">
                <input
                  type="checkbox"
                  checked={formData.ministries.includes(item)}
                  onChange={() => handleMinistryChange(item)}
                />
                {item}
              </label>
            ))}
          </div>
          {formData.ministries.includes('Others') ? (
            <div className="field-group">
              <label htmlFor="otherMinistry">Please specify</label>
              <input
                id="otherMinistry"
                name="otherMinistry"
                value={formData.otherMinistry}
                onChange={handleInputChange}
              />
              {errors.otherMinistry ? <p className="error">{errors.otherMinistry}</p> : null}
            </div>
          ) : null}
        </section>

        <section className="form-section">
          <h3>Section 7: Family Members Information</h3>
          <p className="helper-text">
            This helps us tag your profile with forms submitted by your family members / relatives.
          </p>
          <div className="field-group family-count">
            <label htmlFor="familyCount">Choose number of family members</label>
            <select id="familyCount" name="familyCount" value={formData.familyCount} onChange={handleFamilyCountChange}>
              <option value="None">None</option>
              {[1, 2, 3, 4, 5].map((value) => (
                <option key={value} value={String(value)}>
                  {value}
                </option>
              ))}
            </select>
          </div>

          {formData.familyMembers.map((member, index) => (
            <div key={index} className="family-block">
              <h4>Family Member {index + 1}</h4>
              <div className="grid grid-2">
                <div className="field-group">
                  <label>Name</label>
                  <input value={member.name} onChange={(event) => handleFamilyMemberChange(index, 'name', event.target.value)} />
                </div>
                <div className="field-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={member.email}
                    onChange={(event) => handleFamilyMemberChange(index, 'email', event.target.value)}
                  />
                </div>
                <div className="field-group">
                  <label>Date of Birth</label>
                  <div className="date-grid">
                    <select
                      value={member.dob.day}
                      onChange={(event) => handleFamilyDobChange(index, 'day', event.target.value)}
                    >
                      <option value="">Day</option>
                      {days.map((day) => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
                    </select>
                    <select
                      value={member.dob.month}
                      onChange={(event) => handleFamilyDobChange(index, 'month', event.target.value)}
                    >
                      <option value="">Month</option>
                      {months.map((month) => (
                        <option key={month} value={month}>
                          {month}
                        </option>
                      ))}
                    </select>
                    <select
                      value={member.dob.year}
                      onChange={(event) => handleFamilyDobChange(index, 'year', event.target.value)}
                    >
                      <option value="">Year</option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="field-group">
                  <label>Relationship</label>
                  <input
                    value={member.relationship}
                    onChange={(event) => handleFamilyMemberChange(index, 'relationship', event.target.value)}
                  />
                </div>
              </div>
            </div>
          ))}
          {errors.familyMembers ? <p className="error">{errors.familyMembers}</p> : null}
        </section>

        <section className="form-section">
          <h3>Section 8: Remarks</h3>
          <div className="field-group">
            <label htmlFor="remarks">Additional Remarks</label>
            <textarea id="remarks" name="remarks" rows={5} value={formData.remarks} onChange={handleInputChange} />
          </div>
        </section>

        <button type="submit" className="submit-btn" disabled={isSending}>
          {isSending ? 'Sending...' : 'Submit'}
        </button>
        {submissionError ? <p className="error">{submissionError}</p> : null}
        {successMessage ? <p className="success">{successMessage}</p> : null}

        <footer className="thankyou-banner">
          <p className="cross-line">✝ Jesus Loves You ✝</p>
          <h2 className="animated-thankyou">Thank You</h2>
          <p className="thankyou-note">We are blessed to have you as part of our church family.</p>
        </footer>

        <section className="social-qr-section">
          <h3>Connect With New Life AG (Scan QR Codes)</h3>
          <p className="helper-text">Scan any code to open the official online pages and social channels.</p>
          <div className="social-qr-grid">
            {socialMediaLinks.map((item) => (
              <a
              key={item.name}
              className="qr-card-link"
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              <article className="qr-card">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(item.url)}`}
                  alt={`${item.name} QR Code`}
                  loading="lazy"
                />
                <h4>{item.name}</h4>
              </article>
            </a>
            ))}
          </div>
        </section>
      </form>
    </main>
  )
}

export default App
