const {Router} = require('express');
const router = Router();
const {getans,getps4} = require('../controller/accesorio.controller');

router.get('/nintendo/switch/accesorio',getans);

router.get('/playstation/ps4/accesorio',getps4);

module.exports = router;