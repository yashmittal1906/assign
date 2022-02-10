const User = require("../models/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const express = require("express");
const protect = require("../middleware/protect");
const router = express();


router.post("/signup", async (req,res) => {
    const {firstName,lastName,email,phone,address,password} = req.body;

    if (!email || !password) {
        return res.json({ error: "Fill up all details" });
    }

    const hashPassword = await bcrypt.hash(password,12);

    try {
        const newUser = await User.create({
            firstName,
            lastName,
            email,
            phone,
            address,
            password: hashPassword
        });

        res.status(200).json({
            status: "Success",
            data: {
                newUser
            },
        });
    }
    catch (err) {
        console.log(err);
    }
});


router.post("/login", async (req,res) => {
    const {email,password} = req.body;

    if (!email || !password) {
        return res.json({ error: "Fill up all details" });
    }

    const user = await User.findOne({email});

    if(!user)
    {
        return res.json({
            status: "Error",
            error: "No one is found with this email"
        });
    };

    if(await bcrypt.compare(password, user.password)) {
        const token = jwt.sign(
            {
                id:user._id,
                email: user.email
            },
            process.env.JWT_SECRET
        );
        return res.json({ status: "Success", data: user, token });
    };

    res.json({
        status: "Error",
        error: "Login Unsuccessful"
    });
});


router.get("/getDetails",protect, (req,res) => {
    const user = req.user;
    res.status(200).json({
        status: "Success",
        data: {
           user
        },
    });
})

module.exports = router;