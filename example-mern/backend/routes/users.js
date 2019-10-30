const router = require('express').Router();
let User = require('../models/user.model');
let Order = require('../models/order.model');

router.route('/').get( (req, res) => {
    console.log("llamando api/users/..")
    User.find()
    .then( users => {
        console.log(users)
        res.json(users)
    })
    .catch( err => {
        console.log(err)
        res.status(400).json('Error: ' + err) 
    });
});

router.route('/add').post( (req, res) => {
    console.log("llamando api/users/add")
    const username = req.body.username;
    const email = req.body.email;
    const name = req.body.name;
    const lastname = req.body.lastname;

    const newUser = new User({ username, email, name, lastname });

    newUser.save()
    .then( () => {
        console.log("new user created")
        res.json('User added')
     })
    .catch( err => {
        console.log(err)
        res.status(400).json('Error: ' + err) 
    })
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