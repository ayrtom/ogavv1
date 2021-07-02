const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    // required title category subcategory image_url nuevo usado programable
    // non required description precio_nuevo precio_usado genre code_id isgift   cantidad_usados cantidad_nuevos solo_intercambio
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
        required: false
    },
    image_url: {
        type: String,
        required: true
    },
    precio_nuevo:{
        type: Number,
        required: false
    },
    precio_usado:{
        type: Number,
        required: false
    },
    nuevo:{
        type:Boolean,
        required:true
    },
    usado:{
        type:Boolean,
        required:true
    },
    genre: {
        type: String,
        required: false
    }, 
    code_id: {
        type: Number,
        require: false
    }, 
    isgift: {
        type: Boolean,
        require: false
    },
    programable:{
        type:Boolean,
        require:false
    },
    cantidad_usados:{
        type:Number,
        require:false
    },
    cantidad_nuevos:{
        type:Number,
        require:false
    },
    solo_intercambio:{
        type:Boolean,
        require:false
    }
    ,
    video:{
        type:String,
        require:false
    },
    tienda:{
        type:String,
        require:false
    },
    accesorio:{
        type:Boolean,
        require:false
    }
}, {
    timestamps: true
});

module.exports = model('Product', ProductSchema);