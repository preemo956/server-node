import './helpers/dotenv'

import express from 'express'
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send({ msg: process.env.Title })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})