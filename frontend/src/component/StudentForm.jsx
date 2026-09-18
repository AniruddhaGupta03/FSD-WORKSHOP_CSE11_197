import { useState } from 'react'

function StudentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [error, setError] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))

    if (error) setError('')
    if (isSubmitted) setIsSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all fields before submitting.')
      setIsSubmitted(false)
      return
    }

    setError('')
    setIsSubmitted(true)
    console.log('Form submitted:', formData)
    alert(`Thanks, ${formData.name}! Your form has been submitted.`)
  }

  return (
    <section
      style={{
        maxWidth: '520px',
        margin: '40px auto',
        padding: '28px 24px',
        border: '1px solid #dfe3e8',
        borderRadius: '16px',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
        boxShadow: '0 10px 24px rgba(15, 23, 42, 0.08)',
      }}
    >
      <h2 style={{ margin: '0 0 20px', fontSize: '1.8rem', color: '#111827' }}>Student Form</h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <div>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#374151' }}>
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            style={{
              width: '100%',
              padding: '12px 14px',
              borderRadius: '10px',
              border: '1px solid #cbd5e1',
              fontSize: '1rem',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#374151' }}>
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            style={{
              width: '100%',
              padding: '12px 14px',
              borderRadius: '10px',
              border: '1px solid #cbd5e1',
              fontSize: '1rem',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#374151' }}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message"
            style={{
              width: '100%',
              padding: '12px 14px',
              borderRadius: '10px',
              border: '1px solid #cbd5e1',
              fontSize: '1rem',
              resize: 'vertical',
              boxSizing: 'border-box',
            }}
          />
        </div>

        {error && (
          <p style={{ margin: '0', color: '#dc2626', fontWeight: 500 }}>{error}</p>
        )}

        {isSubmitted && (
          <p style={{ margin: '0', color: '#15803d', fontWeight: 500 }}>Form submitted successfully!</p>
        )}

        <button
          type="submit"
          style={{
            background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            padding: '12px 18px',
            cursor: 'pointer',
            fontWeight: 700,
            fontSize: '1rem',
            transition: 'transform 0.2s ease',
          }}
        >
          Submit
        </button>
      </form>
    </section>
  )
}

export default StudentForm
