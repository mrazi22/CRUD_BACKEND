const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()


const MONGODB_URI = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/CRUD'

const DB_NAME = process.env.DB_NAME || 'CRUD'
mongoose.connect(MONGODB_URI, {
    dbName: DB_NAME
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err))