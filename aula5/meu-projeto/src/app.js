import express from 'express'
import { createUser } from "./userService.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post("/users", (req, res) => {
    try {
        const user =  createUser(req.body)
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
});

export default app;