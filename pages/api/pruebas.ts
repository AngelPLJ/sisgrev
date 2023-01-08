// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req
  switch(method) {
    case "GET":
      res.status(200).json({ name: 'John Doe' })
      break
    case "POST":
      res.status(200).json({ name: 'POST Jhon Doe' })
      break
    default:
      res.status(401).json({ name: 'Page not found' })

  }
}
