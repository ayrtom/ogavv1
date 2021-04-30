const bestproductctrl = {};
const Best_Product = require('../models/best-product')
const fs = require('fs-extra');

bestproductctrl.getFormbestproduct = (req, res) => {
    res.render('product/best-product');
};

bestproductctrl.createbestprodc = async (req, res) => {
    const { title, title_id, category } = req.body;
    const banner = await Best_Product.findOne({ title: { $regex: title, $options: 'i' }, category: { $regex: category, $options: 'i' } });
    if (banner) {
        const path_image_category = path.join(`./src/public/image/${req.body.category}/` + req.file.filename);
        console.log(path_image_category)
        fs.unlink(path.resolve(path_image_category));;
        console.log(`${category} ya existe`)
        req.flash('error_msg', `${category} ya existe`);
        res.redirect('/');
    } else {
        const path_r = req.body.title.replace(/\s/g, "");
        const image_path = `/image/${category}/` + path_r + '.jpg'
        const product = new Best_Product({ title, title_id, category, image_path });
        const save = await product.save();
        fs.rename(`./src/public/image/${category}/${req.file.filename}`, `./src/public/${image_path}`, function (err) {
            if (err) console.log('ERROR: ' + err);
        });
        req.flash('success_msg','imagen para banner creado');
        res.redirect('/');

    }



}

module.exports = bestproductctrl;



