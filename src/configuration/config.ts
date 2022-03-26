require('dotenv').config()

const config = {
  port: process.env.PORT,
  mongodbconnection: process.env.MONGODB_CONNECTION
}

export default config