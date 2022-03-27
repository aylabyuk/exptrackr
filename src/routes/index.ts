import { Router } from 'express'
import { userRouter } from './user'
import { recordRouter } from './record'

const router = Router()

router.use('/user', userRouter)
router.use('/records', recordRouter)

export default router
