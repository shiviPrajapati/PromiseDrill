// Problem 1:

// Using promises and the fs module's asynchronous functions, do the following:
//     1. Create a directory of random JSON files
//     2. Delete those files simultaneously 


const fs = require('fs');
const path = require('path');


async function createDir(Path) {
    return fs.promises.mkdir(Path)
        .then(() => console.log("directory created"))
        .catch((err) => console.log(err))
}


async function createFile(filepath, data) {
    return fs.promises.writeFile(filepath, data, 'utf-8')
        .then(() => console.log("file created: ",filepath))
        .catch(() => console.log(err))
}


function deleteFile(filepath) {
    fs.promises.unlink(filepath)
        .then(() => console.log("file deleted: ",filepath))
        .catch(() => console.log(err))
}




module.exports = { createDir, createFile, deleteFile }
