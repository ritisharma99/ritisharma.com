const querystring = require('querystring')
const fetch = require('node-fetch')

exports.handler = async function (event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const bodyStr = event.body || ''
  // If Content-Type is application/x-www-form-urlencoded, parse accordingly
  const form = querystring.parse(bodyStr)
  const name = form.name || 'No name'
  const email = form.email || 'no-reply@example.com'
  const message = form.message || ''

  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
  const SENDGRID_TO_EMAIL = process.env.SENDGRID_TO_EMAIL
  const SENDGRID_FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || 'no-reply@ritisharma.com'

  if (!SENDGRID_API_KEY || !SENDGRID_TO_EMAIL) {
    return { statusCode: 500, body: 'Email service not configured' }
  }

  const payload = {
    personalizations: [
      {
        to: [{ email: SENDGRID_TO_EMAIL }],
        subject: `New contact from ${name}`,
      },
    ],
    from: { email: SENDGRID_FROM_EMAIL },
    content: [
      { type: 'text/plain', value: `Name: ${name}\nEmail: ${email}\n\n${message}` },
    ],
  }

  try {
    const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const text = await res.text()
      return { statusCode: 502, body: `SendGrid error: ${text}` }
    }

    return { statusCode: 200, body: 'Email sent' }
  } catch (err) {
    return { statusCode: 500, body: String(err) }
  }
}
