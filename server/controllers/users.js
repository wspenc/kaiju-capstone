const {User} = require('../util/models')
const bcrypt = require('bcryptjs')

module.exports = {
    signUp: async (req, res) => {
        try {
            const {username, password} = req.body
            const checkUser = await User.findOne({
                where: {username}
            })
            if(checkUser){
            return res.status(400).send('Username is taken.')
            }
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)

            const newUser = await User.create({
                username: username,
                password: hash
            })
        }
        catch (err) {
            res.status(400).send(err)
        }
    },
    login: async (req, res) => {
        const {username, password} = req.body
            const checkUser = await User.findOne({
                where: {username}
            })
            if(checkUser){
            let authenticated = bcrypt.compareSync(password, checkUser.password)
            if(authenticated) {
                delete checkUser.password
                return res.status(200).send(checkUser)
            }
            return res.status(400).send("Incorrect Password")
            }
            return res.status(400).send('No found username')
    }
}