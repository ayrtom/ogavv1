const {Router} = require('express');
const router = Router();
const {getnintendocard,
getsonycard,
getsonymenbresy,
getxboxcard} = require('../controller/tarjetas.controller');

router.get('/category/nintendo/tarjeta',getnintendocard);

router.get('/category/sony/tarjeta',getsonycard);

router.get('/category/sony/menbresia',getsonymenbresy);

router.get('/category/xbox/tarjeta',getxboxcard);


module.exports = router;