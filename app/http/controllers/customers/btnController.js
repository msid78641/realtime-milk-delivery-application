const Menu = require('../../models/menu')
function searchController() {
    return {
        async search(req, res) {
            const pizza = await Menu.find({name:{$regex:"/Amul/"}}).forEach(printjson)
            console.log(pizza)
            return res.render('search', { pizza: pizza })
        }
    }
}

module.exports = searchController