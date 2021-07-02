const Retroctrl = {};
const Product = require('../models/product');


//nintendo retro

Retroctrl.getnintendones = async(req,res) =>{
    const category = "Nintendo"
    const subcategory = "Nintendo Nes"
    const programable = false
    const product = await Product.find({category:{$eq:category},subcategory:{$eq:subcategory},programable:{$eq:programable}}).sort('title').lean();
    console.log('product');
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','no tenemos nada en stock');
        res.redirect('/');
    }
   
};

Retroctrl.getsupernintendo = async(req,res) =>{
    const subcategory = "Super Nintendo"
    const category = "Nintendo"
    const programable = false
    const product = await Product.find({category:{$eq:category},subcategory:{$eq:subcategory},programable:{$eq:programable}}).sort('title').lean();
    console.log('product');
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','no tenemos nada en stock');
        res.redirect('/');
    }
   
};

Retroctrl.getnintendo64 = async(req,res) =>{
    const subcategory = "Nintendo 64"
    const category = "Nintendo"
    const programable = false
    const product = await Product.find({category:{$eq:category},subcategory:{$eq:subcategory},programable:{$eq:programable}}).sort('title').lean();
    console.log('product');
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','no tenemos nada en stock');
        res.redirect('/');
    }
   
};

Retroctrl.getgamecube = async(req,res) =>{
    const subcategory = "Gamecube"
    const category = "Nintendo"
    const programable = false
    const product = await Product.find({category:{$eq:category},subcategory:{$eq:subcategory},programable:{$eq:programable}}).sort('title').lean();
    console.log('product');
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','no tenemos nada en stock');
        res.redirect('/');
    }
   
};

Retroctrl.getnintendowii = async(req,res) =>{
    const subcategory = "Nintendo Wii"
    const category = "Nintendo"
    const programable = false
    const product = await Product.find({category:{$eq:category},subcategory:{$eq:subcategory},programable:{$eq:programable}}).sort('title').lean();
    console.log('product');
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','no tenemos nada en stock');
        res.redirect('/');
    }
   
};

Retroctrl.getnintendowiiu = async(req,res) =>{
    const subcategory = "Nintendo Wii U";
    const category = "Nintendo"
    const programable = false
    const product = await Product.find({category:{$eq:category},subcategory:{$eq:subcategory},programable:{$eq:programable}}).sort('title').lean();
    console.log('product');
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','no tenemos nada en stock');
        res.redirect('/');
    }
   
};

Retroctrl.getnintendods = async(req,res) =>{
    const subcategory = "Nintendo Nds"
    const category = "Nintendo"
    const programable = false
    const product = await Product.find({category:{$eq:category},subcategory:{$eq:subcategory},programable:{$eq:programable}}).sort('title').lean();
    console.log('product');
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','no tenemos nada en stock');
        res.redirect('/');
    }
   
};

Retroctrl.getnintendo3ds = async(req,res) =>{
    const subcategory = "Nintendo 3ds"
    const category = "Nintendo"
    const programable = false
    const product = await Product.find({category:{$eq:category},subcategory:{$eq:subcategory},programable:{$eq:programable}}).sort('title').lean();
    console.log('product');
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','no tenemos nada en stock');
        res.redirect('/');
    }
   
};

Retroctrl.getgameboycolor = async(req,res) =>{
    const subcategory = "Gameboy Color"
    const category = "Nintendo"
    const programable = false
    const product = await Product.find({category:{$eq:category},subcategory:{$eq:subcategory},programable:{$eq:programable}}).sort('title').lean();
    console.log('product');
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','no tenemos nada en stock');
        res.redirect('/');
    }
   
};

Retroctrl.getgameboyadvance = async(req,res) =>{
    const subcategory = "Gameboy Advance"
    const category = "Nintendo"
    const programable = false
    const product = await Product.find({category:{$eq:category},subcategory:{$eq:subcategory},programable:{$eq:programable}}).sort('title').lean();
    console.log('product');
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','no tenemos nada en stock');
        res.redirect('/');
    }
   
};

//sony retro

Retroctrl.getps1 = async(req,res) =>{
    const subcategory = "Playstation 1"
    const category = "Playstation"
    const programable = false
    const product = await Product.find({category:{$eq:category},subcategory:{$eq:subcategory},programable:{$eq:programable}}).sort('title').lean();
    console.log('product');
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','no tenemos nada en stock');
        res.redirect('/');
    }
   
};

Retroctrl.getps2 = async(req,res) =>{
    const subcategory = "Playstation 2"
    const category = "Playstation"
    const programable = false
    const product = await Product.find({category:{$eq:category},subcategory:{$eq:subcategory},programable:{$eq:programable}}).sort('title').lean();
    console.log('product');
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','no tenemos nada en stock');
        res.redirect('/');
    }
   
};

Retroctrl.getps3 = async(req,res) =>{
    const subcategory = "Playstation 3"
    const category = "Playstation"
    const usado = true
    const product = await Product.find({category:{$eq:category},subcategory:{$eq:subcategory},usado:{$eq:usado}}).sort('title').lean();
    console.log('product');
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','no tenemos nada en stock');
        res.redirect('/');
    }
   
};

Retroctrl.getpsp = async(req,res) =>{
    const subcategory = "PSP"
    const category = "Playstation"
    const programable = false
    const product = await Product.find({category:{$eq:category},subcategory:{$eq:subcategory},programable:{$eq:programable}}).sort('title').lean();
    console.log('product');
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','no tenemos nada en stock');
        res.redirect('/');
    }
   
};

Retroctrl.getpspvita = async(req,res) =>{
    const subcategory = "Playstation Vita"
    const category = "Playstation"
    const programable = false
    const product = await Product.find({category:{$eq:category},subcategory:{$eq:subcategory},programable:{$eq:programable}}).sort('title').lean();
    console.log('product');
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','no tenemos nada en stock');
        res.redirect('/');
    }
   
};

//xbox

Retroctrl.getxbox360 = async(req,res) =>{
    const subcategory = "Xbox 360"
    const category = "Xbox"
    const programable = false
    const product = await Product.find({category:{$eq:category},subcategory:{$eq:subcategory},programable:{$eq:programable}}).sort('title').lean();
    console.log('product');
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','no tenemos nada en stock');
        res.redirect('/');
    }
   
};

Retroctrl.getxbox = async(req,res) =>{
    const subcategory = "Xbox"
    const category = "Xbox"
    const programable = false
    const product = await Product.find({category:{$eq:category},subcategory:{$eq:subcategory},programable:{$eq:programable}}).sort('title').lean();
    console.log('product');
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','no tenemos nada en stock');
        res.redirect('/');
    }
   
};

module.exports = Retroctrl;