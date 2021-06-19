const express = require('express')
const translateRouter = require(`./routers/translate`)

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())
app.use(translateRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})