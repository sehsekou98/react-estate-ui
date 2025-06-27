import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js"; // Include `.js`

export const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {

        // Hash password

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);

        // CREATING A NEW USER

        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });

        console.log(newUser);

        res.status(201).json({ message: "User created successfully." });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to create user." });

    }


};

export const login = async (req, res) => {
    const { username, password } = req.body;

    try {

        // CHECKING IF USER EXISTS
        const user = await prisma.user.findUnique({
            where: { username }
        })
        if (!user) return res.status(401).json({ message: "Invalid credentials" });

        // CHECKING IF PASSWORD IS CORRECT

        const isPasswordVaild = await bcrypt.compare(password, user.password);
        if (!isPasswordVaild) return res.status(401).json({ message: "Invalid credentials." });

        // GENERATE COOKIE TOKEN AND SEND TO THE USER.

        

        const age = 1000 * 60 * 60 * 24 * 7


        const token = jwt.sign({
            id: user.id,
            isAdmin: true,
        }, process.env.JWT_SECRET_KEY,
            { expiresIn: age });

            const {password:userPasword, ...userInfo } = user;


        res.cookie("token", token,
            {
                httpOnly: true,
                maxAge: age,
            }).status(200).json();

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to login." });

    }

};

export const logout = (req, res) => {
    res.clearCookie("token").status(200).json({ message: "Logout Sucesful" });

}