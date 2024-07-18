const express = require('express')

const router = express.Router()
const controller = require('../controllers/crude')

router.post('/addUser',controller.addUser)
router.get('/getUsers',controller.getUsers)
router.get('/updateUser/:id',controller.updateUser)
router.put('/changeUser/:id',controller.changeUser)
router.delete('/deleteUser/:id',controller.deleteUser)
//669815faab635a8f29c633b4

module.exports = router