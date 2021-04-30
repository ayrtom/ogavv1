const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    //title,category,subCategory,description,image_url,price,status,genre, code_id,isgift//
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subcategory: {
        type: String,
        require: false
    },
    description: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        require: true
    }, 
    genre: {
        type: String,
        required: false
    }, 
    code_id: {
        type: Number,
        require: true
    }, 
    isgift: {
        type: String,
        require: false
    }
}, {
    timestamps: true
});

module.exports = model('Product', ProductSchema);