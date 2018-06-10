var express = require('express');
var _router = express.Router();
var multer = require('multer');
var path = require('path');
const Photo = require("../model/photo");

var returnRouter = function (io) {
//store photo
var store = multer.diskStorage({
    destination:function(req,file,cb){
        // console.log(file)
        // cb(null, './uploads');
        cb(null, '../fileupload/angular/src/assets/upload');
    },
    filename:function(req,file,cb){
        cb(null, Date.now()+'.'+file.originalname);
    }
});

var upload = multer({storage:store}).single('file');
//upload image db
_router.post('/upload', function(req,res,next){
 
    upload(req,res,function(err){            
            new Photo({
        filename: req.file.filename,
      
    }).save().then((newphoto) => {
        // if(newpoto){
        //     // io.sockets.emit("photosocket", {
        //     // });
        //     console.log('created new photo: ', newphoto);
        // }
        
    });
        if(err){
            return res.status(501).json({error:err});
        }
        //do all database record saving activity
        return res.json({originalname:req.file.originalname, uploadname:req.file.filename});
    });
});
//dowmloads
_router.post('/download', function(req,res,next){
    // filepath = path.join(__dirname,'../uploads') +'/'+ req.body.filename;
    filepath = path.join(__dirname,'../angular/src/assets/upload') +'/'+ req.body.filename;
    console.log(filepath)
    res.sendFile(filepath);
});
//all photoss
_router.get('/allphoto', (req, res, next) => {
    Photo.find({}).exec(function (err, ipho) {
        if (err) throw err;
        // console.log(ipho)
        return res.json(ipho);
    })
});
module.exports = _router;
return _router;
}
module.exports = returnRouter;