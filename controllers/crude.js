const User = require('../models/useModels')
const createError = require('http-errors')

module.exports = {
    addUser: async (req, res, next) => {
        try {
            const user = new User(req.body)
            const result = await user.save()
            res.send({message: 'User created successfully', result})
            
        } catch (error) {
            next(error)
            
        }
    },

    getUsers: async (req, res, next) => {
        try {
            await User.find({}).then((result) => {
                res.send(result)
            })
            
        } catch (error) {
            next(error)
            
        }
    },

    updateUser: async (req, res, next) => {
        try {
            const id = req.params.id
            await User.findById({_id:id})
            .then(users => {
                res.json(users)
            })
           .catch(error => {
               next(error)
           })
            
        } catch (error) {
            next(error)
            
        }
    },

    changeUser: async (req, res, next) => {
        try {
            const id = req.params.id
            await User.findByIdAndUpdate({_id:id}, 
                {
                    name: req.body.name,
                    email: req.body.email,
                    age: req.body.age
                }
            )
            .then(users => {
                res.json(users)
            })
           .catch(error => {
               next(error)
           })
            
            
        } catch (error) {
            next(error)
            
        }

    },

    deleteUser: async (req, res, next) => {
        try {
            const id = req.params.id
            const result = await User.findByIdAndDelete({_id:id})
            if(!result) throw createError(404, 'User not found')
                res.send({message: 'User deleted successfully', result})
            
        } catch (error) {
            next(error)
            
        }
    }
}