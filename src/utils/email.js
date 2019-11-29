import axios from 'axios'

export const sendEmail = async ({
  from,
  to,
  html,
  text,
  subject,
  attachments,
  cb,
}) => {
  try {
    const data = {
      from,
      tos: [...to],
      subject,
      text,
      html,
      attachments,
    }

    return await axios({
      method: 'POST',
      url: 'https://cleveritpage.azurewebsites.net/api/SendEmailPage',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      data,
    })
  } catch (error) {
    console.error('error: ', error)
    return error
  } finally {
    cb && cb()
  }
}

export const checkEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
