const { Router } = require('express');

const router = Router();
const { allProducts,
    rendernewproduct,
    createProduct,
    renderProduct,
    renderProductid,
    updateProduct,
    deleteProduct,
    searchProduct,
    //nintendo
    
    NuevoSwitchJuego,
    UsadoSwitchJuego,
    PrecioSwitchnuevoJuego,
    PrecioSwitchusadoJuego,
    //Sony
    NuevoSonyps4Juego,
    UsadoSonyps4Juego,
   PrecioSonyps4nuevo,
   PrecioSonyps4usado,
    //ps5
    NuevoSonyps5Juego,
    UsadoSonyps5Juego,
    PrecioSonyps5nuevo,
    PrecioSonyps5usado,
    //Xbox
    NuevoXboxJuego,
    UsadoXboxJuego,
    Precioxboxonenuevo,
    Precioxboxoneusado
} = require('../controller/product.controller');

const { isAuthenticated } = require('../helpers/auth');




// New Product
router.get('/category', allProducts);

router.get('/product/add', isAuthenticated, rendernewproduct);

router.post('/product/add', createProduct);

// Get all product

router.get('/product/details/:id', renderProduct);

// Edit Product

router.get('/product/edit/:id', renderProductid);

router.put('/product/edit/:id', updateProduct);

// Delete Product

router.delete('/product/delete/:id', deleteProduct);

router.post('/product/findproduct', searchProduct);
// Nintendo


router.get('/category/nintendo/nintendo_switch/nuevo', NuevoSwitchJuego);

router.get('/category/nintendo/nintendo_switch/usado', UsadoSwitchJuego);

router.get('/category/nintendo/nintendo_switch/descuento_nuevos', PrecioSwitchnuevoJuego);

router.get('/category/nintendo/nintendo_switch/descuento_usados', PrecioSwitchusadoJuego);

//Sony

router.get('/category/sony/playstation_4/nuevo',NuevoSonyps4Juego );

router.get('/category/sony/playstation_4/usado', UsadoSonyps4Juego);

router.get('/category/sony/playstation_4/descuento_nuevos', PrecioSonyps4nuevo);

router.get('/category/sony/playstation_4/descuento_usados', PrecioSonyps4usado);

//ps5
router.get('/category/sony/ps5/nuevo', NuevoSonyps5Juego);

router.get('/category/sony/ps5/usado', UsadoSonyps5Juego);

router.get('/category/sony/ps5/descuento_nuevos', PrecioSonyps5nuevo);

router.get('/category/sony/ps5/descuento_usados', PrecioSonyps5usado);

//Xbox
router.get('/category/xbox/xbox_one/nuevo', NuevoXboxJuego);

router.get('/category/xbox/xbox_one/usado', UsadoXboxJuego);

router.get('/category/xbox/xbox_one/descuento_nuevos', Precioxboxonenuevo);

router.get('/category/xbox/xbox_one/descuento_usados', Precioxboxoneusado);

module.exports = router;