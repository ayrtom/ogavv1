const programingctrl = {};
const Product = require('../models/product');

//nintendo

programingctrl.getpiratends = async(req,res)=>{
    const nds = 'Nintendo Nds'
    const programable = 'true'
    const product = await Product.find({subcategory :{$eq:nds}, programable:{$eq:programable}}).lean();
    console.log('product')
    res.render('product/all-product', { product });
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','ah ocurrido un error')
        res.redirect('/')
    }
};

programingctrl.getpirate3ds = async(req,res)=>{
    const n3ds = 'Nintendo 3ds'
    const programable = 'true'
    const product = await Product.find({subcategory :{$eq:n3ds}, programable:{$eq:programable}}).lean();
    console.log('product')
    
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','ah ocurrido un error')
        res.redirect('/')
    }
};

programingctrl.getpiratenes = async(req,res)=>{
    const nes = 'Nintendo Nes'
    const programable = 'true'
    const product = await Product.find({subcategory :{$eq:nes}, programable:{$eq:programable}}).lean();
    console.log('product')
    
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','ah ocurrido un error')
        res.redirect('/')
    }
};

programingctrl.getpiratesnes = async(req,res)=>{
    const snes = 'Super Nintendo'
    const programable = 'true'
    const product = await Product.find({subcategory :{$eq:snes}, programable:{$eq:programable}}).lean();
    console.log('product')
    
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','ah ocurrido un error')
        res.redirect('/')
    }
};

programingctrl.getpiraten64 = async(req,res)=>{
    const n64 = 'Nintendo 64'
    const programable = 'true'
    const product = await Product.find({subcategory :{$eq:n64}, programable:{$eq:programable}}).lean();
    console.log('product')
    
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','ah ocurrido un error')
        res.redirect('/')
    }
};

programingctrl.getpirategamecube = async(req,res)=>{
    const gc = 'Gamecube'
    const programable = 'true'
    const product = await Product.find({subcategory :{$eq:gc}, programable:{$eq:programable}}).lean();
    console.log('product')
    
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','ah ocurrido un error')
        res.redirect('/')
    }
};

programingctrl.getpiratewii = async(req,res)=>{
    const wii = 'Nintendo Wii'
    const programable = 'true'
    const product = await Product.find({subcategory :{$eq:wii}, programable:{$eq:programable}}).lean();
    console.log('product')
    
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','ah ocurrido un error')
        res.redirect('/')
    }
};

programingctrl.getpiratewiiu = async(req,res)=>{
    const wiiu = 'Nintendo Wii U'
    const programable = 'true'
    const product = await Product.find({subcategory :{$eq:wiiu}, programable:{$eq:programable}}).lean();
    console.log('product')
    
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','ah ocurrido un error')
        res.redirect('/')
    }
};

programingctrl.getpirateswitch = async(req,res)=>{
    const sw = 'Nintendo_Switch';
    const programable = 'true'
    const product = await Product.find({subcategory :{$eq:sw}, programable:{$eq:programable}}).lean();
    console.log('product')
    
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','ah ocurrido un error')
        res.redirect('/')
    }
};

programingctrl.getpirategameboy = async(req,res)=>{
    const gameboy = 'Gameboy Color';
    const programable = 'true'
    const product = await Product.find({subcategory :{$eq:gameboy}, programable:{$eq:programable}}).lean();
    console.log('product')
    
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','ah ocurrido un error')
        res.redirect('/')
    }
};

programingctrl.getpirategameboyadvance = async(req,res)=>{
    const gba = 'Gameboy Advance';
    const programable = 'true'
    const product = await Product.find({subcategory :{$eq:gba}, programable:{$eq:programable}}).lean();
    console.log('product')
    
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','ah ocurrido un error')
        res.redirect('/')
    }
};

//sony

programingctrl.getpirateps1 = async(req,res)=>{
    const ps1 = 'Playstation 1'
    const programable = 'true'
    const product = await Product.find({subcategory :{$eq:ps1}, programable:{$eq:programable}}).lean();
    console.log('product')
    
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','ah ocurrido un error')
        res.redirect('/')
    }
};

programingctrl.getpirateps2 = async(req,res)=>{
    const ps2 = 'Playstation 2'
    const programable = 'true'
    const product = await Product.find({subcategory :{$eq:ps2}, programable:{$eq:programable}}).lean();
    console.log('product')
    
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','ah ocurrido un error')
        res.redirect('/')
    }
};

programingctrl.getpirateps3 = async(req,res)=>{
    const ps3 = 'Playstation 3'
    const programable = 'true'
    const product = await Product.find({subcategory :{$eq:ps3}, programable:{$eq:programable}}).lean();
    console.log('product')
   
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','ah ocurrido un error')
        res.redirect('/')
    }
};

programingctrl.getpirateps4 = async(req,res)=>{
    const ps4 = 'Playstation_4'
    const programable = 'true'
    const product = await Product.find({subcategory :{$eq:ps4}, programable:{$eq:programable}}).lean();
    console.log('product')
    
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','ah ocurrido un error')
        res.redirect('/')
    }
};

programingctrl.getpiratepsp = async(req,res)=>{
    const psp = 'PSP'
    const programable = 'true'
    const product = await Product.find({subcategory :{$eq:psp}, programable:{$eq:programable}}).lean();
    console.log('product')
    
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','ah ocurrido un error')
        res.redirect('/')
    }
};

programingctrl.getpiratepspvita = async(req,res)=>{
    const psvita = 'Playstation Vita'
    const programable = 'true'
    const product = await Product.find({subcategory :{$eq:psvita}, programable:{$eq:programable}}).lean();
    console.log('product')
    
    if(product.length > 0){
        res.render('product/all-product', { product });
    }else{
        req.flash('error_msg','ah ocurrido un error')
        res.redirect('/')
    }
};


module.exports = programingctrl;