import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/api/record', [], (req: Request, res: Response) => {
  return res.send('the record')
})

router.post('/api/record', (req, res) => {
  return res.send('new record created')
})

export { router as recordRouter }