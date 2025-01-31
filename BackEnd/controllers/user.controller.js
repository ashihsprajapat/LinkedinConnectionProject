
import express from 'express';
import httpStatus from 'http-status'
import { User } from './../models/user.model.js';
import bcrypt from "bcrypt";
import crypto from "crypto";
import { Profile } from './../models/profile.model.js';
import e from 'express';


export const register = async (req, res) => {

    try {
        let { username, name, password, email } = req.body;
        if (!name || !username || !email || !password) {
            return res.status(400).json({ message: "all fields are required" })
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "username is already exist" })
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            username,
            password: hashPassword,
            email,
        })
        await newUser.save();
        const profile = new Profile({ userId: newUser._id });

        return res.json({ message: "user registerd successfully !" });
    } catch (err) {
        console.log(err);
        throw err;
    }
}



//route for login
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({ message: "username or password required" })
        }
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(httpStatus.UNAUTHORIZED).json({ message: "worng username or password" })
        }

        let match = await bcrypt.compare(password, user.password);
        if (match) {
            let token = await crypto.randomBytes(32).toString("hex");
            await User.updateOne({ _id: user._id }, { token });
            // await user.token=token;
            // await user.save();
            return res.status(httpStatus.OK).json({ token });
        } else {
            return res.status(404).json({ message: "password are wrong" })
        }

    } catch (err) {
        throw err;
    }


}
export const uploadProfilePicture = async (req, res) => {
    const token = req.body;
    console.log(token)
    try {
        let user = await User.findOne({ token: token });
        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }
        user.profilePictur = req.file.filename;
        console.log(user.profilePictur);
        return res.json({ message: "Profile pitcure update" })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}