require('dotenv').config()

const config = {
  port: process.env.PORT || 4000,
  mongodbconnection: process.env.MONGODB_CONNECTION || '',
  jwtSecret: process.env.JWT_SECRET || '',
  jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET || '',
  jwtTokenLife: process.env.JWT_TOKEN_LIFE || 900,
  jwtRefreshTokenLife: process.env.JWT_TOKEN_LIFE || 86400,
}

export default config
