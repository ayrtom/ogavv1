const accesorioctrl = {};
const Product = require('../models/product');

accesorioctrl.getans = async(req,res) =>{
    const subcategoria = "Nintendo Switch";
    const accesorio = true ;
    const product = await Product.find({subcategory:{$eq:subcategoria},accesorio:{$eq:accesorio}}).sort('title').lean();
    console.log(product)
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','ocurrio un error')
        res.redirect('/');
    }
}

accesorioctrl.getps4 = async(req,res) =>{
    const subcategoria = "Playstation 4";
    const accesorio = true ;
    const product = await Product.find({subcategory:{$eq:subcategoria},accesorio:{$eq:accesorio}}).sort('title').lean();
    console.log(product)
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','ocurrio un error')
        res.redirect('/');
    }
}


module.exports = accesorioctrl;