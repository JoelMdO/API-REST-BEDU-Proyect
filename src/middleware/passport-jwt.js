const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const { findByID } = require('../services/user');

passport.use(
    new Strategy({
        secretOrKey: process.env.TOKEN_TXT,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
        async function (payload, done) {
            console.log(`Passport Payload: ${payload}`);
            try {
                const user = await findByID(payload.User_id);
                console.log(`Passport user: ${user}`);
                if (!user) {
                    return done(null, false, {
                        message: 'User not found',
                    }), false
                };
                done(null, user);
                console.log(`Passport user after done: ${user}`);
            } catch (e) {
                return done(e, false);
            }
        }));

module.exports = passport.authenticate('jwt', { session: false });