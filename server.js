//this server is purely for testing the build version of the app
const express = require('express')

const app = express()
app.use(express.static('./build'))

app.listen(5000)