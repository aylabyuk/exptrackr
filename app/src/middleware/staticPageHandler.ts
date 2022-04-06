import fs from 'fs'
import path from 'path'
import { Request, Response, NextFunction } from 'express'

const staticPageHandler = (req: Request, res: Response, next: NextFunction) => {
  try {
    const filePath = `./client/out${req.path}.html`

    if (fs.existsSync(filePath)) {
      res.sendFile(path.join(__dirname, '../../', filePath))
    } else {
      res.sendFile(path.join(__dirname, '../../', './client/out/404.html'))
      next()
    }
  } catch (error) {
    console.log(error)
    next()
  }
}

export default staticPageHandler
