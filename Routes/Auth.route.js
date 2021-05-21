const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const User = require("../Models/User.models");
const { authSchema } = require("../Helpers/validation_schema");
const { signAccessToken } = require("../Helpers/jwt_helper");

router.post('/register', async(req, res, next) => {
    try {
        // const {email, password} = req.body;
        // if (!email || !password) throw createError.BadRequest();
        const result = await authSchema.validateAsync(req.body);

        const exist = await User.findOne({ email: result.email });
        if (exist)
            throw createError.Conflict(`${result.email} already exists`);

        const user = new User(result);
        const savedUser = await user.save();

        const accessToken = await signAccessToken(savedUser.id);

        res.send({accessToken});
    } catch (error) {
        if(error.isJoi === true) error.status = 422;
        next(error);
    }
});

router.post('/login', async(req, res, next) => {
    res.send("Login Route");
});

router.post('/refresh-token', async(req, res, next) => {
    res.send("Refresh Token Route");
});

router.delete('/logout', async(req, res, next) => {
    res.send("Logout Route");
});


module.exports = router;
