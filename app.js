//contiene las libresias y metodos , ficheros y rutas 
/*==========================================================
========================= dependencias =====================
============================================================*/
'use strict'
var appaddress='https://stark-sea-10471.herokuapp.com';
var helmet = require('helmet');
var bodyParser=require('body-parser');
var express=require("express");
var morgan =require("morgan");
var path = require('path');
var cookieParser=require('cookie-parser');
//var passport=require('passport');
var session=require('express-session');
var autentifica=require('./middleware/autenficador');
var User=require('./models/usuario');
var Admin=require('./models/administrador');
//var configPassport=require('./passport')(passport);
/*==========================================================
======================== instanciando express ==============
============================================================*/
const app=express();
var RutasPrincipal=require("./routes/principal");
var RutasValidacion=require('./routes/valida');
var RutasModulo=require("./routes/modulo");
var Ss=require('./controllers/session');
/*==========================================================
============== usando motor de plantillas ejs ==============
============================================================*/
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));
/*==========================================================
======================== middleware ========================
============================================================*/
app.use(helmet());
app.use(morgan('short'));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname+'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(session({
    secret:"yasuo",
    resave:false,
    saveUninitialized:false
}));
// app.use(passport.initialize());
// app.use(passport.session());
/*==========================================================
========================= RUTAS ============================
============================================================*/
//ruta base carga vista del login es ala que se accede al cargar la pagina por primera vez
app.get("/",(req,res)=>{
    res.render("pages/login");
});
app.use((req,res,next)=>{ //middleware de session
    var Usuario=req.body.Usuario;
    var Password=req.body.Password;
    User.findOne({usuario:Usuario,password:Password},(err,user)=>{
        if(err)
        {
           next();
        }
        else
        {
            if(user)
            {
                console.log(Ss.storeSession(user._id));
                req.session.user_id=user._id;
                res.locals={usuario:user};
            }
            else
            {
                Admin.findOne({usuario:Usuario,password:Password},(err,admin)=>{
                    if(err)
                    {
                        next();
                    }
                    else
                    {
                        if(admin)
                        {
                            req.session.user_id=admin._id;
                            res.locals={usuario:admin};
                        }
                        else
                        {
                            next();
                        }
                    }
                });
            }
        }
    });
});
app.use('/public',express.static(__dirname + '/public'));
app.use("/validacion",RutasValidacion); //la loguearse se envia la informacion a la ruta de validacion/usuario
//ruta de usuario logueado
app.use("/principal",RutasPrincipal); //menu con todas las opciones segun privilegios
app.use((req,res,next)=>{ //middleware de autentificacion
    if(!req.session.user_id)
    {
        res.redirect(appaddress+'/');
    }
    else{
        next();
    }
});
app.use("/modulo",RutasModulo);
app.get('/logout/:id',function(req,res){    
    if(Ss.logout(req,res))
    {
        res.redirect('/');
    }
    else
    {
        res.redirect('/');
    }
});  
//ruta de error
app.get("*",(req,res)=>
{
    res.status(404).render("pages/error");
});
module.exports=app;