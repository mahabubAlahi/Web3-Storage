const multer = require("multer");
const fs = require('fs');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        fs.mkdir('uploads/',(err)=>{
            cb(null, 'uploads/');
         });
    },
    filename: (req, file, cb) => {
      cb(null, new Date().toISOString().replace(/:/g, '-')+ file.originalname)
      //cb(null, new Date().toISOString() + file.originalname);
    },
});

const uploadStorage = multer({ storage: storage })

module.exports = {
    uploadStorage
}