// Problem 1:
    
// Using promises and the fs module's asynchronous functions, do the following:
//     1. Create a directory of random JSON files
//     2. Delete those files simultaneously 


const fs= require('fs');
const path = require('path');


function createDir(Path) {
    return new Promise((res, rej) => {
        fs.mkdir(Path, (err) => {
            if (!err) {
                res("directory created!")
            }
            else {
                rej(err)
            }
        })
    })
}


function createFile(filepath, data){
    return new Promise((res, rej) => {
        fs.writeFile(filepath, data, 'utf-8', (data,err) => {
            if(!err){
                res(filepath) 
            }
            else{
                rej(err)
            }
        })
    })
}


function deleteFile(filepath){
    return new Promise((res, rej) => {
        fs.unlink(filepath, (err) => {
            if(!err){
                res(filepath)
            }
            else{
                rej(err)
            }
        })
    })
}




module.exports = {createDir, createFile, deleteFile}