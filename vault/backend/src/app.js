const express = require('express')
const connDB = require('./configurations/db')

const app = express()

connDB()

app.use(express.json())

const PORT = process.env.port || 9000

global.key1 = null, 
global.key2 = null,
global.sa = false, 
global.db = false, 
global.unseal = false

app.use('/api/unseal',require('./routes/api/unseal'))
app.use('/api/user',require('./routes/api/users'))
app.use('/api/ga',require('./routes/api/gakey'))
app.use('/api/app',require('./routes/api/appcred'))


app.listen(PORT,function(){
    console.log(`Server is running on ${PORT}`)
})