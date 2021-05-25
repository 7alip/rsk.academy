import { getEvents } from '@lib/getEvents'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { id } = req.query
  try {
    const response = await getEvents()

    if (id) {
      const event = response.find(e => e?.id === id)

      if (event) {
        res.status(200).json(event)
      } else {
        res.status(404).json(null)
      }
    } else {
      res.status(200).json(response)
    }
  } catch (error) {
    res.status(500).json(error)
  }
}
