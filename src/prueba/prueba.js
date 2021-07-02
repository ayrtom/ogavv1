const { title,description, nuevo, usado, precio_nuevo, precio_usado, category, subcategory,programable,genre,code_id,isgift,cantidad_usados,cantidad_nuevos,solo_intercambio ,original_name} = req.body
if(req.file == null){
    const updateProduct = await Product.findByIdAndUpdate(req.params.id, { title,  description,  nuevo, usado, programable, precio_nuevo, precio_usado, genre, code_id,isgift,cantidad_usados,cantidad_nuevos,solo_intercambio});
    req.flash('success_msg','se actualizo la informacion');
    res.redirect('/');
}else{
    const img_name = req.body.title.replace(/\s/g, "");
    const original_path = path.join(__dirname, `../public/image/${category}/${subcategory}/`+original_name+'.jpg');
    const image_url = `/image/${category}/${subcategory}/` + img_name + '.jpg'
    const img_raw_path = path.join(__dirname, `../public/image/${category}/${subcategory}/${req.file.filename}`);
    const path_img_rename = path.join(__dirname, `../public${image_url}`);
    
    console.log(category,subcategory);
    console.log(req.body);
    
    
    
    
    
    const updateProduct = await Product.findByIdAndUpdate(req.params.id, { title,  description,  nuevo, usado, programable, precio_nuevo, precio_usado, image_url , genre, code_id,isgift,cantidad_usados,cantidad_nuevos,solo_intercambio});
    if(original_name != title){
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
