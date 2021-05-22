const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const User = require("../Models/User.models");
const { authSchema } = require("../Helpers/validation_schema");
const { signAccessToken, signRefreshToken, verifyRefreshToken } = require("../Helpers/jwt_helper");

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
        const refreshToken = await signRefreshToken(savedUser.id);

        res.send({ accessToken, refreshToken });
    } catch (error) {
        if(error.isJoi === true) error.status = 422;
        next(error);
    }
});

router.post('/login', async(req, res, next) => {
    try {
        const result = await authSchema.validateAsync(req.body);
        
        const user = await User.findOne({ email: result.email });
        if(!user) throw createError.NotFound("User Not Found");

        const isMatch = await user.isValidPassword(result.password);
        if(!isMatch) throw createError.Unauthorized("UserName/Password not valid");

        const accessToken = await signAccessToken(user.id);
        const refreshToken = await signRefreshToken(user.id);

        res.send({ accessToken, refreshToken });
    } catch (error) {
        if(error.isJoi === true)
            return next(createError.BadRequest("Invalid UserName/Password"));
        next(error);
    }
});

router.post('/refresh-token', async(req, res, next) => {
    try {
        const { refreshToken } = req.body;
        if(!refreshToken) throw createError.BadRequest();
        const userId = await verifyRefreshToken(refreshToken);

        const accessToken = await signAccessToken(userId);
        const newrefreshToken = await signRefreshToken(userId);

        res.send({ accessToken: accessToken, refreshToken: newrefreshToken });
    } catch (error) {
        next(error);
    }
});

router.delete('/logout', async(req, res, next) => {
    try {
        const { refreshToken } = req.body;
        if(!refreshToken) throw createError.BadRequest();

        const userId = await verifyRefreshToken(refreshToken);
        console.log(userId);

    } catch (error) {
        next(error);
    }
});


module.exports = router;
