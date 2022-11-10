// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const result = { name: 'John Doe' }
  res.status(200).json(result)
}
