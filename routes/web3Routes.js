const express = require('express');
const router = express.Router();

const web3Controller = require("../controllers/web3-controller");
const {uploadStorage} = require('../config/multer-config');

const BASE_PREFIX = "/api";

router.route("/upload-pdf").post(uploadStorage.single('file'), web3Controller.storePdfs);

module.exports = {
    router,
    basePrefix: BASE_PREFIX
};

