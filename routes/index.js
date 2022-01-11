var express = require('express');
var router = express.Router();
const { v4: uuidV4 } = require('uuid');

/* GET home page. */
router.get('/', (req, res) => {
  res.redirect(`/${ uuidV4() }`);
})

router.get('/:room', function(req, res) {
  res.render('index', { roomId: req.param.room });
});

module.exports = router;
