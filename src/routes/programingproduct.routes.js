const {Router} = require('express');
const router = Router();
const {//nintendo
    getpiratends,
getpirate3ds,
getpiratenes,
getpiratesnes,
getpiraten64,
getpirategamecube,
getpiratewii,
getpiratewiiu,
getpirateswitch,
getpirategameboy,
getpirategameboyadvance,
//sony
getpirateps1,
getpirateps2,
getpirateps3,
getpirateps4,
getpiratepsp,
getpiratepspvita,
} = require('../controller/programing.controller');

//nintendo
router.get('/programacion/nds',getpiratends);
router.get('/programacion/3ds',getpirate3ds);
router.get('/programacion/wii',getpiratewii);
router.get('/programacion/wiiu',getpiratewiiu);
router.get('/programacion/switch',getpirateswitch);
router.get('/programacion/gameboy',getpirategameboy);
router.get('/programacion/gameboyadvance',getpirategameboyadvance);
router.get('/programacion/nes',getpiratenes);
router.get('/programacion/snes',getpiratesnes);
router.get('/programacion/n64',getpiraten64);
router.get('/programacion/gamecube',getpirategamecube);
//sony
router.get('/programacion/ps1',getpirateps1);
router.get('/programacion/ps2',getpirateps2);
router.get('/programacion/ps3',getpirateps3);
router.get('/programacion/ps4',getpirateps4);
router.get('/programacion/psp',getpiratepsp);
router.get('/programacion/pspvita',getpiratepspvita);



module.exports = router;