const tarjetasctrl = {};
const Product = require('../models/product');

tarjetasctrl.getnintendocard = async(req,res) =>{
    const category = "Nintendo"
    const subcategory = "Gift Card"
    const product = await Product.find({ category:{$eq:category},subcategory:{$eq:subcategory}}).sort('title').lean();

    if(product.length > 0){
        res.render('product/all-product',{ product })
    }else{
        req.flash('error_msg','ah ocurrido un error')
        res.redirect('/')
    }
};

tarjetasctrl.getsonycard = async(req,res) =>{
    const category = "Playstation"
    const subcategory = "Gift Card"
    const product = await Product.find({ category:{$eq:category},subcategory:{$eq:subcategory}}).sort('title').lean();
    if(product.length > 0){
        res.render('product/all-product',{ product })
    }else{
        req.flash('error_msg','ah ocurrido un error')
        res.redirect('/')
    }
};

tarjetasctrl.getxboxcard = async(req,res) =>{
    const category = "Xbox"
    const subcategory = "Gift Card"
    const product = await Product.find({ category:{$eq:category},subcategory:{$eq:subcategory}}).sort('title').lean();
    if(product.length > 0){
        res.render('product/all-product',{ product })
    }else{
        req.flash('error_msg','ah ocurrido un error')
        res.redirect('/')
    }
};

tarjetasctrl.getsonymenbresy = async(req,res) =>{
    const category = "Playstation"
    const subcategory = "MemberShip"
    const product = await Product.find({ category:{$eq:category},subcategory:{$eq:subcategory}}).sort('title').lean();
    if(product.length > 0){
        res.render('product/all-product',{ product })
    }else{
        req.flash('error_msg','ah ocurrido un error')
        res.redirect('/')
    }
};

module.exports = tarjetasctrl;

