const express = require('express');

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);
    res.send('response from user add');
});

// getall
// getbyid
// delete
// update

module.exports = router;