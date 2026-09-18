import { useState } from 'react'
import axios from 'axios'

const METHODS = ['GET', 'POST', 'PUT', 'DELETE']

const colors = {
  border: '#2f3b46',
  accent: '#f2a63f',
  muted: '#9aa7b1',
  panel: '#111b22',
  panelAlt: '#18242d',
  panelSoft: '#1f2d38',
  error: '#ff7d7d',
  text: '#edf3f8',
  field: '#0f171d',
  success: '#75d3a1',
  warning: '#f5c76a',
}

const fieldStyle = {
  padding: '12px 14px',
  border: `1px solid ${colors.border}`,
  background: colors.field,
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '14px',
  color: colors.text,
  outline: 'none',
}

const labelStyle = {
  color: colors.muted,
  fontSize: '12px',
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
}

function statusColor(status) {
  if (!status) return colors.muted
  if (status < 300) return colors.success
  if (status < 400) return colors.warning
  return colors.error
}

function ApiTester() {
  const [method, setMethod] = useState('PUT')
  const [url, setUrl] = useState('http://localhost:3002/user/1')
  const [body, setBody] = useState('{\n  "name": "Aman",\n  "email": "aman@example.com"\n}')
  const [response, setResponse] = useState(null)
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const bodyAllowed = method === 'POST' || method === 'PUT'

  const handleSend = async () => {
    if (!url.trim()) {
      setError('Enter a URL to send the request to.')
      return
    }

    let parsedBody
    if (bodyAllowed && body.trim()) {
      try {
        parsedBody = JSON.parse(body)
      } catch {
        setError('Request body is not valid JSON.')
        return
      }
    }

    setLoading(true)
    setError('')
    setResponse(null)
    setStatus(null)

    try {
      const res = await axios({ method, url: url.trim(), data: parsedBody })
      setStatus(res.status)
      setResponse(res.data)
    } catch (err) {
      if (err.response) {
        setStatus(err.response.status)
        setResponse(err.response.data)
      } else {
        setError(err.message || 'Request failed')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      style={{
        maxWidth: '980px',
        margin: '30px auto 60px',
        padding: '36px 32px 28px',
        background: 'linear-gradient(180deg, #0b1218 0%, #101a22 100%)',
        border: `1px solid ${colors.border}`,
        boxShadow: '0 16px 32px rgba(0, 0, 0, 0.3)',
      }}
    >
      <h2
        style={{
          margin: '0 0 26px',
          font: "500 34px 'Playfair Display', serif",
          borderBottom: `1px solid ${colors.border}`,
          paddingBottom: '18px',
          color: colors.text,
        }}
      >
        API Tester Dashboard
      </h2>

      {/* Method / URL / Send row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '130px 1fr 160px',
          border: `1px solid ${colors.border}`,
          marginBottom: '22px',
          background: colors.panelAlt,
        }}
      >
        <select
          value={method}
          onChange={(event) => setMethod(event.target.value)}
          style={{
            ...fieldStyle,
            border: 'none',
            borderRight: `1px solid ${colors.border}`,
            fontWeight: 700,
            cursor: 'pointer',
            background: colors.panelSoft,
            color: colors.text,
          }}
        >
          {METHODS.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>

        <input
          type="text"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          placeholder="http://localhost:3002/user"
          style={{ ...fieldStyle, border: 'none', background: colors.field }}
        />

        <button
          type="button"
          onClick={handleSend}
          disabled={loading}
          style={{
            border: 'none',
            borderLeft: `1px solid ${colors.border}`,
            backgroundColor: colors.accent,
            color: '#111b22',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            fontSize: '12px',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.8 : 1,
          }}
        >
          {loading ? 'Sending...' : 'Send Request'}
        </button>
      </div>

      {error && <p style={{ color: colors.error, marginBottom: '16px', fontWeight: 500, background: '#1f1717', padding: '10px 12px', border: '1px solid #462b2b' }}>{error}</p>}

      {/* Request body input */}
      <div style={{ marginBottom: '26px', opacity: bodyAllowed ? 1 : 0.5 }}>
        <label style={{ ...labelStyle, display: 'block', marginBottom: '8px' }}>Request Body</label>
        <textarea
          value={body}
          onChange={(event) => setBody(event.target.value)}
          disabled={!bodyAllowed}
          rows={8}
          spellCheck={false}
          style={{
            ...fieldStyle,
            width: '100%',
            resize: 'vertical',
            fontFamily: "'Fira Code', 'Courier New', monospace",
            fontSize: '13px',
            lineHeight: 1.6,
            boxSizing: 'border-box',
            background: colors.field,
          }}
        />
        {!bodyAllowed && (
          <p style={{ margin: '6px 0 0', fontSize: '12px', color: colors.muted }}>
            {method} requests are sent without a body.
          </p>
        )}
      </div>

      {/* Response */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: '8px',
        }}
      >
        <label style={labelStyle}>Response</label>
        <span style={{ ...labelStyle, color: statusColor(status) }}>
          Status: {status ?? '—'}
        </span>
      </div>

      <pre
        style={{
          margin: 0,
          padding: '16px',
          minHeight: '140px',
          maxHeight: '360px',
          overflow: 'auto',
          background: colors.panelAlt,
          border: `1px solid ${colors.border}`,
          fontFamily: "'Fira Code', 'Courier New', monospace",
          fontSize: '13px',
          lineHeight: 1.6,
          color: response ? colors.text : colors.muted,
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
        }}
      >
        {response ? JSON.stringify(response, null, 2) : 'No response yet — send a request to see it here.'}
      </pre>
    </section>
  )
}

export default ApiTester