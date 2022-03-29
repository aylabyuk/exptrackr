import passport from 'passport'

const authCheck = passport.authenticate('jwt', { session: false })

export default authCheck
