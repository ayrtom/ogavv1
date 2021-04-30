const {Schema,model} = require('mongoose')

const bestProductSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    image_path: {
        type:String,
        require:true
    },
    title_id: {
        type:String,
        required:true
    },
    category:{
        type:String,
        require:true
    }
});

module.exports = model('BestProduct', bestProductSchema);