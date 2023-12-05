const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const { findByID } = require('../services/user');

passport.use(
    new Strategy({
        secretOrKey: process.env.TOKEN_TXT,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
        async function (payload, done) {

            try {
                const user = await findByID(payload.User_id);

                if (!user) {
                    return done(null, false, {
                        message: 'User not found',
                    }), false
                };
                done(null, user);

            } catch (e) {
                return done(e, false);
            }
        }));

module.exports = passport.authenticate('jwt', { session: false });