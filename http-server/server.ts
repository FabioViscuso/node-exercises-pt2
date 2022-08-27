import express from "express";

export const app = express()

app.get('/', (req, res) => {
    res.setHeader("Content-Type", "application/json")
    res.json({ message: 'hello!' })
})

