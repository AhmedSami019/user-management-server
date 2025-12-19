const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 3000

app.use(cors())

app.get('/', (req, res)=>{
    res.send("user coming soon")
})

const users = [
    {id: 1, name: "sami", email: "sami@gmail.com"},
    {id: 2, name: "sakil", email: "sakil@gmail.com"},
    {id: 3, name: "sajil", email: "sajid@gmail.com"},
    {id: 4, name: "sabila", email: "sabila@gmail.com"}
]

app.get('/users', (req, res)=>{
    res.send(users)
})

app.post('/users', (req, res)=>{
    console.log("users post method");
})

app.listen(port, ()=>{
    console.log(`the server is running on port ${port}`);
})