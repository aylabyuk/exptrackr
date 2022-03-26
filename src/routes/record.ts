import { Request, Response, Router } from 'express'

const router = Router()

router.get('/api/record', [], (req: Request, res: Response) => {
  return res.send('the record')
})

router.post('/api/record', (req, res) => {
  return res.send('new record created')
})

export { router as recordRouter }