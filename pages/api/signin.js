import { setCookie } from 'nookies'
import auth from '../../utils/auth'

const users = {
  'taro': {},
}

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end()
    return
  }

  if (req.body.username in users) {
    const token = auth.sign({ username: req.body.username })
    setCookie({ res }, 'accessToken', token, { path: '/' })
    res.status(200).end()
  } else {
    res.status(400).end()
  }
}
