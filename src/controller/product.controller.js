const productCtrl = {};
const Product = require('../models/product');
const path = require('path');
const fs = require('fs-extra');






//new Product

productCtrl.allProducts = async (req, res) => {
    const product = await Product.find().sort('title').lean();
    console.log('product')
    res.render('product/all-product', { product });
};

productCtrl.createProduct = async (req, res) => {

    const { title, description, category, price,subcategory,status,genre,code_id,isgift } = req.body;

    const newProduct = await Product.findOne({ title: { $regex: title, $options: 'i' }, category: { $regex: category, $options: 'i' } });

    if (newProduct == null) {

        const image_url_reference = req.body.title.replace(/\s/g, "");

        const image_url = `/image/${category}/${subcategory}/` + image_url_reference + '.jpg'

        const root_path = `${category}/${subcategory}/${req.file.filename}`

        const product = new Product({ title, description, category, price, image_url ,subcategory,genre,code_id,isgift,status});

        const save = await product.save();

        fs.rename(`./src/public/image/${root_path}`, `./src/public/${image_url}`, function (err) {
            if (err) console.log('ERROR: ' + err);
        });


        req.flash('success_msg', 'Producto Agregado');

        console.log(product)

        res.redirect('/');

    } else {
        const path_image_category = path.join(`./src/public/image/${req.body.subcategory}/${req.body.category}/` + req.file.filename);
        console.log(path_image_category)
        fs.unlink(path.resolve(path_image_category));;

        req.flash('error_msg', 'El producto ya existe');
        console.log('producto ya existe: ' + req.file.filename);
        res.redirect('/');
    }







};

//render get new Product
productCtrl.rendernewproduct = (req,res) =>{
    res.render('product/new-product');
}

//Get all notes

productCtrl.renderProduct = async(req, res) => {
    const id = req.params.id

    const productId = await Product.findById(id).lean();
    console.log(productId);
    res.render('product/product-details', { productId });
};

// Edit Product

productCtrl.renderProductid = async (req, res) => {
    const id = req.params.id

    const productId = await Product.findById(id).lean();
    console.log(productId);
    res.render('product/edit-product', { productId });
};

productCtrl.updateProduct = async (req, res) => {
    const { title, price, description } = req.body
    const updateProduct = await Product.findByIdAndUpdate(req.params.id, { title, price, description });
    res.redirect('/category');
};

productCtrl.deleteProduct = async (req, res) => {
    try {
        console.log(req.params.id)
        const product = await Product.findByIdAndDelete(req.params.id);
        fs.unlink(path.resolve('./src/public/' + product.image_url));;
        res.redirect('/category')

    } catch (err) {
        console.log(err)
    }
};

productCtrl.searchProduct = async (req, res) => {
    const title = req.body.title
    const productId = await Product.findOne({ title: { $regex: title, $options: 'i' } }).lean();

    if(productId){
        console.log(productId);

        res.render('product/product-details', { productId });
    }else{
        console.log('no hay producto')
        req.flash('error_msg','no hay en stock del producto')
        
    }


   
}

productCtrl.searchNintendo = async (req, res) => {
    const categoryid = "Nintendo_swicth";
    const product = await Product.find().sort('title').where('category').equals(categoryid).lean();

    res.render('product/all-product', { product })

};

productCtrl.searchSony = async (req, res) => {
    const categoryid = "Playstation_4";
    const product = await Product.find().sort('title').where('category').equals(categoryid).lean();

    res.render('product/all-product', { product })

};

productCtrl.searchXbox = async (req, res) => {
    const categoryid = "Xbox_one";
    const product = await Product.find().sort('title').where('category').equals(categoryid).lean();

    res.render('product/all-product', { product })

};

module.exports = productCtrl;