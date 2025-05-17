import express from "express"

const app = express()

app.get("/", (req, res) => {

    console.log("Hello there!")
    res.send("Hello there!")
})

app.listen(3000, () => {
    console.log("Server is running")
})