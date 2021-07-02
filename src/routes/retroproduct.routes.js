const {Router} = require('express');
const router = Router();
const {//nitendo
getnintendones,
getsupernintendo,
getnintendo64,
getgamecube,
getnintendowii,
getnintendowiiu,
getgameboycolor,
getgameboyadvance,
getnintendods,
getnintendo3ds,
//sony
getps1,
getps2,
getps3,
getpsp,
getpspvita,
//xbox
getxbox,
getxbox360

} = require('../controller/retroproduct.controller');

//NINTENDO
router.get('/category/nintendo/nintendo_nes', getnintendones)
router.get('/category/nintendo/super_nintendo', getsupernintendo)
router.get('/category/nintendo/nintendo_64', getnintendo64)
router.get('/category/nintendo/gamecube', getgamecube)
router.get('/category/nintendo/nintendo_wii', getnintendowii)
router.get('/category/nintendo/nintendo_wii_u', getnintendowiiu)
router.get('/category/nintendo/gameboy_color', getgameboycolor)
router.get('/category/nintendo/gameboy_advance', getgameboyadvance)
router.get('/category/nintendo/nintendo_ds', getnintendods)
router.get('/category/nintendo/nintendo_3ds', getnintendo3ds)

//Sony

router.get('/category/sony/playstation_1', getps1)
router.get('/category/sony/playstation_2', getps2)
router.get('/category/sony/playstation_3', getps3)
router.get('/category/sony/psp', getpsp)
router.get('/category/sony/psp_vita', getpspvita)

//XBOX

router.get('/category/xbox/xbox_360', getxbox360)
router.get('/category/xbox/xbox', getxbox)

module.exports = router;