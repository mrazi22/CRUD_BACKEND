const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/routes')

const app = express()

require('dotenv').config()
require('./helpers/init_mongodb')

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(userRoutes)







app.listen(4000, () => console.log('Server running on port 4000'))