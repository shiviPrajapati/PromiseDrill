// Problem 1:
    
// Using promises and the fs module's asynchronous functions, do the following:
//     1. Create a directory of random JSON files
//     2. Delete those files simultaneously 


const fs= require('fs');
const path = require('path');


function createDir(Path) {
    return new Promise((res, rej) => {
        fs.promises.mkdir(Path)
        .then(() => res("directory created!"))
        .catch((err) => rej(err))
    })
}


function createFile(filepath, data){
    return new Promise((res, rej) => {
        fs.promises.writeFile(filepath, data, 'utf-8')
        .then(() => res(filepath) )       
        .catch((err) => rej(err))
    })
}


function deleteFile(filepath){
    return new Promise((res, rej) => {
        fs.promises.unlink(filepath)
        .then(() => res(filepath))
        .catch((err) => rej(err))
    })
}




module.exports = {createDir, createFile, deleteFile}