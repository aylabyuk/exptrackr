import { Request, Response, Router } from 'express'

const router = Router()

router.get('/', [], (req: Request, res: Response) => {
  return res.send('the record')
})

router.post('/', (req, res) => {
  return res.send('new record created')
})

export { router as recordRouter }
