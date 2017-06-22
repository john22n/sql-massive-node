module.exports = {
    create : function (req, res) {
        var db = req.app.get('db');
        var name = req.body.name;
        var description = req.body.description;
        var price = req.body.price;
        var imageUrl = req.body.imageurl;
        db.create_product([name, description, price, imageUrl]).then(function (product) {
            res.send(product)


        })
    },
    getOne: function (req, res) {
        var db = req.app.get('db');
        var id = req.params.productId
        db.read_product(id).then(function(product){
            res.send(product);
        })
    },
    getAll: function(req, res){
        var db = req.app.get('db');
        db.read_products().then(function(product) {
            res.send(product);
        })
    },
    update: function (req,res) {
        var db = req.app.get('db')
        var id = req.params.productId;
        var description = req.body.description
        db.update_product([id, description]).then(function(product) {
            res.send(product);
        })

    },
    delete: function(req,res) {
        var db = req.app.get('db');
        var id =req.params.productid;
        db.delete_product(id).then(function(product) {
            res.send(product);
        })
    }
}