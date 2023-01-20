const {Shoe} = require('../util/models')

module.exports = {
    getAllShoes: async (req, res) => {
        try {
          let shoes = await Shoe.findAll({})
    
          res.status(200).send(shoes)
        }
        catch (err) {
          res.status(400).send(err)
        }
      },
      getShoe: async (req, res) => {
        try {
          let shoe = await Shoe.findOne({
            where: {id: req.params.id},
          })
    
          res.status(200).send(shoe)
        }
        catch (err) {
          res.status(400).send(err)
        }
      }
    }