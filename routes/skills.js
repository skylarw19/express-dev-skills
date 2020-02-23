var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

//basic just to check that this pg works
// router.get('/', function(req, res, next) {
//     res.send('skills page');
//   });

router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);

// POST
router.post('/', skillsCtrl.create);

// delete
router.delete('/:id', skillsCtrl.delete);

module.exports = router;