const { Web3Storage, getFilesFromPath, File } = require('web3.storage');
require('dotenv').config()
const path = require('path');

function makeStorageClient() {
    return new Web3Storage({ token: process.env.ACCESS_TOKEN })
}

const storePdfs = async (req, res) => {

    const files = []
    const val = req.file;
    const value = path.join(__dirname,'../',val.path);
    const pathFiles = await getFilesFromPath(value)
    files.push(...pathFiles)
    const client = makeStorageClient();
    const cid = await client.put(files);
    res.send({
        msg: "PDF Upload Successful!",
        data: cid
    });
}

module.exports = {
    storePdfs
}