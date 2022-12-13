import * as jwt from 'jsonwebtoken'

const auth = {
  sign(payload) {
    const token = jwt.sign(payload, 'test_common_key', { expiresIn: '1h' })
    return token
  },
  verify(token) {
    if (token) {
      try {
        const decoded = jwt.verify(token, 'test_common_key')
        return decoded
      } catch (e) {
        return null
      }
    } else {
      return null
    }
  },
}

export default auth
