"use strict";

const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const { JWT_SECRET } = require('./configuration');
const User = require('./models/user');

// JSON WEB TOKEN STRATEGY
passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: JWT_SECRET
}, async (payload, done) => {
    try {
        // Find the user that owns the token
        const user = await User.findById(payload.sub);

        // Check if user exists
        if (!user) {
            return done(null, false);
        }
        
        // Return the user
        done(null, user);
    } catch (error) {
        done(error, false);
    }
}));

// LOCAL STRATEGY
passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (email, password, done) => {
    try {
        // Find the user that owns the email address
        const user = await User.findOne({ email });

        // Check if user exists
        if (!user) {
            return done(null, false);
        }

        // Check password is valid
        const isMatch = await user.isValidPassword(password);
        if (!isMatch) {
            return done(null, false);
        }

        // Return the user
        done(null, user);
    } catch (error) {
        done(error, false);
    }
}));