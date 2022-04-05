if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const config = {
  port: process.env.PORT || 4000,
  mongodbconnection: process.env.MONGODB_CONNECTION || '',
}

export default config
