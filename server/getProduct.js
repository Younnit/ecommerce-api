const products = require('../products.json')

const getProduct = (req, res) => {
    const item = products.find((val) => val.id === +req.params.id)
    if (!item) {
        return res.status(500).send('That item is not in the list')
    }
    res.status(200).send(item)
}

module.exports = getProduct