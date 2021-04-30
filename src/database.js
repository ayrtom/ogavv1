const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost/catalogo_web2';

mongoose.connect(MONGODB_URI,{
    useUnifiedTopology:true,
    useNewUrlParser : true
})
.then(db => console.log('Databse is connected'))
.catch(err => console.log(err));