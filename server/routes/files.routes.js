const fileController = require('../controllers/file.controller');

const multer = require("multer");
const postController = require('../controllers/post.controller');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../server/public/images/");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    },
});

const upload = multer({ storage: storage });
console.log("MulterUpload-------------",upload.array);

module.exports = app => {
    // app.post("/api/upload/:id", upload.array('path',10),fileController.uploadFile);
    // app.post("/api/posts/", upload.array('images',10), postController.create);
    app.post("/api/posts/", upload.single('images'), postController.create);
    //app.get("/api/files/", fileController.getFiles);


}


