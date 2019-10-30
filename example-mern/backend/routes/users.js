const router = require('express').Router();
let User = require('../models/user.model');
let Order = require('../models/order.model');

router.route('/').get( (req, res) => {
    User.find()
    .then( users => res.json(users) )
    .catch( err => res.status(400).json('Error: ' + err) );
});

router.route('/add').post( (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const name = req.body.name;
    const lastname = req.body.lastname;

    const newUser = new User({ username, email, name, lastname });

    newUser.save()
    .then( () => res.json('User added') )
    .catch( err => res.status(400).json('Error: ' + err) );
});

//TODO
//get orders for a specify user
router.route('/orders').post( (req, res) => {
    const id_user = req.body.id_user;
    Order.find({ id_user: id_user })
    .then( orders => res.json(orders) )
    .catch( err => res.status(400).json('Error: ' + err) );


})

module.exports = router;