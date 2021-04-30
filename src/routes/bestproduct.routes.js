const {Router} = require('express');
const router = Router();
const {getFormbestproduct,createbestprodc} = require('../controller/bestproduct.controller');

router.get('/product/best',getFormbestproduct);
router.post('/product/best',createbestprodc);

module.exports = router;