var express = require('express');
const house_controlers= require('../controllers/house');
var router = express.Router();
/* GET houses*/
router.get('/', house_controlers.house_view_all_Page );
module.exports = router;
