var express = require('express');
const house_controlers= require('../controllers/house');
var router = express.Router();
/* GET houses*/
router.get('/', house_controlers.house_view_all_Page );
/* GET detail costume page */
router.get('/detail', house_controlers.house_view_one_Page);

module.exports = router;
