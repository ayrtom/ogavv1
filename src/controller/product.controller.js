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
    const { title, category, subcategory, nuevo, usado, programable ,accesorio } = req.body;
    const NewProduct = await Product.findOne({ title: { $regex: title, $options: 'i' }, category: { $eq: category }, subcategory: { $eq: subcategory } }).lean();
    const img_name = req.body.title.replace(/\s/g, "");
    const image_url = `/image/${category}/${subcategory}/` + img_name + '.jpg';
    const img_raw_path = path.join(__dirname, `../public/image/${category}/${subcategory}/${req.file.filename}`);
    const img_rename_path = path.join(__dirname, `../public${image_url}`);

    if (NewProduct == null) {


        const product = new Product({ title, category, subcategory, image_url, nuevo, usado, programable,accesorio })
        const productsave = await product.save();
        console.log(product);
        if (fs.existsSync(img_raw_path)) {
            fs.rename(img_raw_path, img_rename_path, function (err) {
                if (err) console.log('ERROR: ' + err);
                console.log('producto usado rename file...')
            });
            console.log('usado renamed');
            req.flash('success_msg', 'archivo usado renombrado');
            res.redirect('/');
        }
    } else {
        fs.unlink(path.resolve(img_raw_path), function (err) {
            if (err) console.log('ERROR: ' + err);
            console.log('error al eliminar archivo...')
        });;
        console.log('ah ocurrido un error')
        req.flash('error_msg', 'ya existe el producto')
        res.redirect('#');

    }

};

//render get new Product
productCtrl.rendernewproduct = (req, res) => {
    res.render('product/new-product');
}

//Get all notes

productCtrl.renderProduct = async (req, res) => {
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

// required title category subcategory image_url nuevo usado programable
// non required description precio_nuevo precio_usado genre code_id isgift   cantidad_usados cantidad_nuevos solo_intercambio
productCtrl.updateProduct = async (req, res) => {
    const { title, description, nuevo, usado, precio_nuevo, precio_usado, category, subcategory, programable, genre, code_id, isgift, cantidad_usados, cantidad_nuevos, solo_intercambio, original_name ,video,tienda,accesorio } = req.body
    if (req.file == null) {

        if (title != original_name) {
            const product_consult = await Product.findOne({ title: { $regex: title, $options: 'i' }, category: { $eq: category }, subcategory: { $eq: subcategory } }).lean();
            if (product_consult == null) {
                
                const img_name = req.body.title.replace(/\s/g, "");
                const original = req.body.original_name.replace(/\s/g, "");
                const original_path = path.join(__dirname, `../public/image/${category}/${subcategory}/`+original+'.jpg');
                const image_url = `/image/${category}/${subcategory}/` + img_name + '.jpg'
                const imagen_reemplazar = path.join(__dirname, `../public/image/${category}/${subcategory}/`+img_name+'.jpg');
                const path_img_rename = path.join(__dirname, `../public${image_url}`);
                
                
                   
                    fs.rename(original_path, imagen_reemplazar, function (err) {
                        if (err) console.log('ERROR: ' + err);
                        console.log('rename file...')
                    });
                    console.log(original_path);
                    const updateProduct = await Product.findByIdAndUpdate(req.params.id, { title, description, image_url, nuevo, usado, programable, precio_nuevo, precio_usado, genre, code_id, isgift, cantidad_usados, cantidad_nuevos, solo_intercambio ,video,tienda,accesorio});
                    req.flash('success_msg', 'se actualizo la informacion');
                    res.redirect('/');
                
               
            } else {
                req.flash('error_msg', 'el nombre esta en uso 2')
                res.redirect('#');
            }

        } else {
            const updateProduct = await Product.findByIdAndUpdate(req.params.id, { title, description, nuevo, usado, programable, precio_nuevo, precio_usado, genre, code_id, isgift, cantidad_usados, cantidad_nuevos, solo_intercambio ,video,tienda,accesorio});
            req.flash('success_msg', 'se actualizo la informacion');
            res.redirect('/');
        }

    } else {
        const img_name = req.body.title.replace(/\s/g, "");
        const original = req.body.original_name.replace(/\s/g, "");
        const original_path = path.join(__dirname, `../public/image/${category}/${subcategory}/` +original+ '.jpg');
        const image_url = `/image/${category}/${subcategory}/` + img_name + '.jpg'
        const img_raw_path = path.join(__dirname, `../public/image/${category}/${subcategory}/${req.file.filename}`);
        const path_img_rename = path.join(__dirname, `../public${image_url}`);

        console.log(category, subcategory);
        console.log(req.body);
        
        if (title != original_name) {
            const img_consult = await Product.findOne({ title: { $regex: title, $options: 'i' }, category: { $eq: category }, subcategory: { $eq: subcategory } }).lean();
            console.log('verificando nombre')
            if(img_consult == null){
               
                const updateProduct = await Product.findByIdAndUpdate(req.params.id, { title, description, nuevo, usado, programable, precio_nuevo, precio_usado, image_url, genre, code_id, isgift, cantidad_usados, cantidad_nuevos, solo_intercambio,video,tienda,accesorio });
                fs.unlink(path.resolve(original_path), function (err) {
                    if (err) console.log('ERROR: ' + err);
                    console.log('error al eliminar archivo...')
                });;
                
                if (fs.existsSync(img_raw_path)) {
                    console.log('raw file rename......')
                    fs.rename(img_raw_path, path_img_rename, function (err) {
                        if (err) console.log('ERROR: ' + err);
                        console.log('rename file...')
                    });
                    console.log('renamed');
    
                    req.flash('success_msg', 'archivo renombrado');
                    res.redirect('/');
                } else {
                    req.flash('error_msg', 'no se genero el archivo temporal')
                    res.redirect('/');
                }
            }else{
                fs.unlink(path.resolve(img_raw_path), function (err) {
                    if (err) console.log('ERROR: ' + err);
                    console.log('error al eliminar archivo...')
                });;
                req.flash('error_msg','el nombre ya esta en uso')
                res.redirect('#')
            }
            

        } else {
            if (fs.existsSync(img_raw_path)) {
                console.log('raw file rename......')
                fs.rename(img_raw_path, path_img_rename, function (err) {
                    if (err) console.log('ERROR: ' + err);
                    console.log('rename file...')
                });
                console.log('renamed');
                req.flash('success_msg', 'archivo renombrado');
                res.redirect('/');
            } else {
                req.flash('error_msg', 'no se genero el archivo temporal')
                res.redirect('/');
            }
        }




    }



};

productCtrl.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        const filedelete = path.join(__dirname, `../public/${product.image_url}`);
        console.log(product);
        fs.unlink(path.resolve(filedelete));;
        req.flash('success_msg', 'archivo eliminado del servidor');
        res.redirect('/')
    } catch (err) {
        req.flash('error_msg', 'ha habido un problema');
        console.log(err)
        res.redirect('/');
    }
};

productCtrl.searchProduct = async (req, res) => {
    const title = req.body.title
    const productId = await Product.find({ title: { $regex: title, $options: 'i' } }).lean();
    console.log(productId)

    if (productId.length > 0) {
        console.log(productId);
        res.render('product/search-product', { productId });
    } else {
        console.log('no hay producto');
        req.flash('success_msg', 'no hay en stock del producto');
        res.redirect('/')
    }

}

//nitendo
productCtrl.NuevoSwitchJuego = async (req, res) => {
    const subcategoryid = "Nintendo Switch";
    const nuevo = true;
    const accesorio = false;
    const product = await Product.find({ subcategory: subcategoryid, nuevo: nuevo,accesorio:accesorio }).sort('title').lean();
    console.log(product);
    if (product.length > 0) {
        res.render('product/all-product', { product })
    } else {
        req.flash('error_msg', 'sucedio un error')
        res.redirect('/');
    }


};
productCtrl.UsadoSwitchJuego = async (req, res) => {
    const subcategoryid = "Nintendo Switch";
    const usado = true;
    const product = await Product.find({ subcategory: subcategoryid, usado: usado }).sort('title').lean();
    if (product.length > 0) {
        res.render('product/all-product', { product })
    } else {
        req.flash('error_msg', 'sucedio un error')
        res.redirect('/');
    }

};

productCtrl.PrecioSwitchnuevoJuego = async (req, res) => {
    const subcategoryid = "Nintendo Switch";

    const product = await Product.find({ subcategory: subcategoryid }).sort('precio_nuevo').lean();

    if (product.length > 0) {
        res.render('product/all-product', { product })
    } else {
        req.flash('error_msg', 'ah ocurrido un problema')
        res.redirect('/')
    }



};
productCtrl.PrecioSwitchusadoJuego = async (req, res) => {
    const subcategoryid = "Nintendo Switch";

    const product = await Product.find({ subcategory: subcategoryid }).sort('precio_usado').lean();

    if (product.length > 0) {
        res.render('product/all-product', { product })
    } else {
        req.flash('error_msg', 'ah ocurrido un problema')
        res.redirect('/')
    }

};


//sony

productCtrl.NuevoSonyps5Juego = async (req, res) => {
    const subcategoryid = "Playstation 5";
    const nuevo = true;
    const product = await Product.find({ subcategory: subcategoryid, nuevo: nuevo }).sort('title').lean();
    if (product.length > 0) {
        res.render('product/all-product', { product })
    } else {
        req.flash('error_msg', 'sucedio un error')
        res.redirect('/');
    }

};

productCtrl.UsadoSonyps5Juego = async (req, res) => {
    const subcategoryid = "Playstation 5";
    const usado = true;
    const product = await Product.find({ subcategory: subcategoryid, usado: usado }).sort('title').lean();
    if (product.length > 0) {
        res.render('product/all-product', { product })
    } else {
        req.flash('error_msg', 'sucedio un error')
        res.redirect('/');
    }

};

productCtrl.PrecioSonyps5nuevo = async (req, res) => {
    const subcategoryid = "Playstation 5";

    const product = await Product.find({ subcategory: subcategoryid }).sort('precio_nuevo').lean();

    if (product.length > 0) {
        res.render('product/all-product', { product })
    } else {
        req.flash('error_msg', 'ah ocurrido un problema')
        res.redirect('/')
    }



};
productCtrl.PrecioSonyps5usado = async (req, res) => {
    const subcategoryid = "Playstation 5";

    const product = await Product.find({ subcategory: subcategoryid }).sort('precio_usado').lean();

    if (product.length > 0) {
        res.render('product/all-product', { product })
    } else {
        req.flash('error_msg', 'ah ocurrido un problema')
        res.redirect('/')
    }

};


//ps5
productCtrl.NuevoSonyps4Juego = async (req, res) => {
    const subcategoryid = "Playstation 4";
    const nuevo = true;
    const product = await Product.find({ subcategory: subcategoryid, nuevo: nuevo }).sort('title').lean();
    if (product.length > 0) {
        res.render('product/all-product', { product })
    } else {
        req.flash('error_msg', 'sucedio un error')
        res.redirect('/');
    }

};

productCtrl.UsadoSonyps4Juego = async (req, res) => {
    const subcategoryid = "Playstation 4";
    const usado = true;
    const product = await Product.find({ subcategory: subcategoryid, usado: usado }).sort('title').lean();
    if (product.length > 0) {
        res.render('product/all-product', { product })
    } else {
        req.flash('error_msg', 'sucedio un error')
        res.redirect('/');
    }
};

productCtrl.PrecioSonyps4nuevo = async (req, res) => {
    const subcategoryid = "Playstation 4";

    const product = await Product.find({ subcategory: subcategoryid }).sort('precio_nuevo').lean();

    if (product.length > 0) {
        res.render('product/all-product', { product })
    } else {
        req.flash('error_msg', 'ah ocurrido un problema')
        res.redirect('/')
    }



};
productCtrl.PrecioSonyps4usado = async (req, res) => {
    const subcategoryid = "Playstation 4";

    const product = await Product.find({ subcategory: subcategoryid }).sort('precio_usado').lean();

    if (product.length > 0) {
        res.render('product/all-product', { product })
    } else {
        req.flash('error_msg', 'ah ocurrido un problema')
        res.redirect('/')
    }

};




//Xbox

productCtrl.NuevoXboxJuego = async (req, res) => {
    const subcategoryid = "Xbox One";
    const nuevo = true;
    const product = await Product.find({ subcategory: subcategoryid, nuevo: nuevo }).sort('title').lean();
    if (product.length > 0) {
        res.render('product/all-product', { product })
    } else {
        req.flash('error_msg', 'sucedio un error')
        res.redirect('/');
    }

};

productCtrl.UsadoXboxJuego = async (req, res) => {
    const subcategoryid = "Xbox One";
    const usado = true;
    const product = await Product.find({ subcategory: subcategoryid, usado: usado }).sort('title').lean();
    if (product.length > 0) {
        res.render('product/all-product', { product })
    } else {
        req.flash('error_msg', 'sucedio un error')
        res.redirect('/');
    }

};

productCtrl.Precioxboxonenuevo = async (req, res) => {
    const subcategoryid = "Xbox One";

    const product = await Product.find({ subcategory: subcategoryid }).sort('precio_nuevo').lean();

    if (product.length > 0) {
        res.render('product/all-product', { product })
    } else {
        req.flash('error_msg', 'ah ocurrido un problema')
        res.redirect('/')
    }



};
productCtrl.Precioxboxoneusado = async (req, res) => {
    const subcategoryid = "Xbox One";

    const product = await Product.find({ subcategory: subcategoryid }).sort('precio_usado').lean();

    if (product.length > 0) {
        res.render('product/all-product', { product })
    } else {
        req.flash('error_msg', 'ah ocurrido un problema')
        res.redirect('/')
    }

};

module.exports = productCtrl;