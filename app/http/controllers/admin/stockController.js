const order = require("../../../models/order")
const moment = require('moment')

function stockController() {
    return { 
         async stock(req, res) {
        const result =  await order.count({});
        const val = await order.aggregate([{$group: { _id: null, total: {$sum: '$price'}}}]);
        const recentsale = await order.find({},{"username":1,"price":1,"status":1,"createdAt":1,"_id":0});
        console.log(recentsale);
            
        res.render('admin/stock',{Count:result, Total: val[0].total,recentsale:recentsale, moment: moment});
        }
    }}

module.exports = stockController

