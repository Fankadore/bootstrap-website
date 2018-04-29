"use strict";

const JWT = require('jsonwebtoken');
const User = require('../models/user');
const { JWT_SECRET } = require('../configuration');

const signToken = (user) => {
    return JWT.sign({
        iss: 'Ruaidhri MacKenzie',
        sub: user.id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1)
    }, JWT_SECRET);
};

module.exports = {
    signUp: async (req, res, next) => {
        const {email, password} = req.value.body;

        // Check if user email is already taken
        const foundUser = await User.findOne({email});
        if (foundUser) {
            return res.status(403).json({error: 'Email is already registered.'});
        }

        // Create new user
        const newUser = new User({email, password});
        await newUser.save();

        // Generate the token
        const token = signToken(newUser);

        // Respond with token
        res.status(200).json({token});

    },
    signIn: async (req, res, next) => {
        // Generate Token
        const token = signToken(req.user);
        res.status(200).json({ token });
    },
    secret: async (req, res, next) => {
        console.log('I MANAGED TO GET HERE!');
        res.json({ secret: 'resource' });
    }
};