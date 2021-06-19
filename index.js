const express = require('express')
const translateRouter = require(`./routers/translate`)

const app = express()
const port = 3000

app.use(express.json())
app.use(translateRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})