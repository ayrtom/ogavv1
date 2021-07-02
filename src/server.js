const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const fs = require('fs-extra')
const multer = require('multer')
const path = require('path');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
// Initialization
const app = express();
require('./config/passport');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',

}));
app.set('view engine', '.hbs');

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        const category = req.body.category
        const subcategory = req.body.subcategory
        const dir = path.join(__dirname, `/public/image/${category}/${subcategory}`);
        if (fs.existsSync(dir)) {
            cb(null, dir)
        }
        fs.mkdirsSync(dir);

        cb(null, dir)
        console.log(req.body);

    },
    filename: (req, file, cb, filename) => {

        cb(null, 'temporal' + path.extname(file.originalname));
    }
});
app.set('trust proxy', 1)

// Midlewares

app.use(express.urlencoded({ extended: true,limit: '50mb' }));
app.use(multer({ storage: storage }).single('image'));
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


// Global Variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next()
});


// Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/product.routes'));
app.use(require('./routes/user.routes'));
app.use(require('./routes/bestproduct.routes'));
app.use(require('./routes/retroproduct.routes'));
app.use(require('./routes/programingproduct.routes'));
app.use(require('./routes/tarjetas.routes'));
app.use(require('./routes/accesorios.routes'));


// Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;