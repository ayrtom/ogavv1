const indexCtrl = {};
const Banner = require('../models/best-product');

indexCtrl.renderIndex = async(req,res) =>{
    const banner = await Banner.find().sort('title').lean();
    res.render('index',{banner});
};

indexCtrl.renderAbout = (req,res) =>{
    res.render('about')
};

indexCtrl.renderProductForm = (req,res) =>{
    res.render('product/new-product')
};

module.exports = indexCtrl;