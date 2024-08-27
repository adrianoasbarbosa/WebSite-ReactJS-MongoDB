require("dotenv").config();

const config = require("./config.json");
const mongoose = require("mongoose");

mongoose.connect(config.connectionString);

const User = require("./models/user.model")

const express = require("express");
const cors = require("cors");
const app = express();

const jwt = require("jsonwebtoken");
const { authenticateToken } = require("./utilities");

app.use(express.json());

app.use(
    cors({
        origin: "*",
    })
);

app.get("/", (req, res) => {
    res.json({ data: "OI" })
})

app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    if (!name) {
        return res
            .status(400)
            .json({ error: true, message: "Nome é obrigatório" });
    }

    if (!email) {
        return res.status(400).json({ error: true, message: "Email é obrigatório" })
    }

    if (!password) {
        return res.status(400).json({ error: true, message: "Senha é obrigatório" })
    }

    const isUser = await User.findOne({ email: email });

    if (isUser) {
        return res.json({
            error: true,
            message: "Usuário já existe",
        })
    }

    const user = new User({
        name,
        email,
        password,
    });

    await user.save();

    const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "36000m",
    });

    return res.json({
        error: false,
        user,
        accessToken,
        message: "Cadastrado com sucesso!",
    });
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email é obrigatório" });
    }
    if (!password) {
        return res.status(400).json({ message: "Senha é obrigatório" });
    }

    const userInfo = await User.findOne({ email: email });

    if (!userInfo) {
        return res.status(400).json({ message: "Usuário não encontrado" });
    }

    if (userInfo.email == email && userInfo.password == password) {
        const user = {
            user: userInfo
        };
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "36000m",
        });

        return res.json({
            error: false,
            message: "Sucesso ao fazer Login",
            email,
            accessToken,
        });

    } else {
        return res.status(400).json({
            error: true,
            message: "Credenciais Invalidas",
        });
    }
});

app.listen(8000);

module.exports = app;