const {Router} = require('express');

const router = Router();
const {allProducts,
    rendernewproduct,
    createProduct,
    renderProduct,
    renderProductid,
    updateProduct,
    deleteProduct,
    searchProduct,
    searchNintendo,
searchSony,
searchXbox,
} = require('../controller/product.controller');

const {isAuthenticated} = require('../helpers/auth');

    
    

// New Product
router.get('/category',allProducts);

router.get('/product/add',isAuthenticated,rendernewproduct);

router.post('/product/add',createProduct);

// Get all product

router.get('/product/details/:id',renderProduct);

// Edit Product

router.get('/product/edit/:id',renderProductid);

router.put('/product/edit/:id',updateProduct);

// Delete Product

router.delete('/product/delete/:id',deleteProduct);

router.post('/product/findproduct',searchProduct);

router.get('/category/nintendo',searchNintendo);

router.get('/category/sony',searchSony);

router.get('/category/xbox',searchXbox);

module.exports = router;