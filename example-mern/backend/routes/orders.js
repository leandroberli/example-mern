const router = require('express').Router();
let Order = require('../models/order.model');

router.route('/').get( (req, res) => {
    Order.find()
    .then( orders => res.json(orders) )
    .catch( err => res.status(400).json('Error: ' + err) );
});

router.route('/add').post( (req, res) => {
    const id_user = req.body.id_user;
    const id_product = req.body.id_product;
    
    const observations = req.body.observations;
    const price = Number(req.body.price);

    const newOrder = new Order({ id_user, id_product, observations, price });

    newOrder.save()
    .then( () => res.json('Order added!') )
    .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;