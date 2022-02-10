const jwt = require('jsonwebtoken')
const User = require("../models/user.js");
const mongoose = require('mongoose')
const { promisify } = require('util');
module.exports = async (req,res,next)=>{
    try {
        const token = req.headers.authorization.split(' ')[1];
        if(!token)
        {
            return next(res.send("Not authorized"));
        }

        const decoded = await promisify(jwt.verify)(
            token,
            process.env.JWT_SECRET
        );

        const user = await User.findOne({_id: decoded.id});
        user.password = undefined;
        req.user = user;
        next();
    }
    catch (err) {
        next (res.send("Not Authorized"));
    }
};