
// Problem 2:

// Using promise and the fs module's asynchronous functions, do the following:
//     1. Read the given file lipsum.txt
//     2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
//     3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
//     4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
//     5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.

const fs = require('fs')
const path = require('path')


function fileRead(file) {
    return fs.promises.readFile(file, 'utf-8')
}




async function convertToUpperCase(readfile, writefile) {
    data = fs.promises.readFile(readfile, 'utf-8')
    return fs.promises.writeFile(writefile, data.toString())
        .then(() => {
            console.log("Data converted to upperCase!")
            fs.promises.writeFile('./test/filenames.txt', writefile.toString() + '\n')
                .then(() => console.log("uppercase file name saved."))
                .catch((err) => console.log(err))
        })
}




async function splitIntoSentences(readfile, writefile) {
    data = fs.promises.readFile(readfile)
    let dataInLower = data.toString().toLowerCase();
    splitData = dataInLower.split(".").join("\n");
    return fs.promises.writeFile(writefile, splitData, 'utf-8')
        .then(() => {
            console.log("Data converted to Sentences!")
            fs.promises.appendFile('./test/filenames.txt', writefile.toString() + '\n')
                .then(() => console.log("split file name saved."))
                .catch((err) => console.log(err))
        })
        .catch((err) => console.log(err))
}




async function sortData(fileread, filewrite) {
    data = fs.promises.readFile(fileread)
    data = data.toString();
    let sortdata = data.split('\n').sort().join('\n');
    return fs.promises.writeFile(filewrite, sortdata, 'utf-8')
        .then(() => {
            console.log("Data is Sorted!")
            fs.promises.appendFile('./test/filenames.txt', filewrite.toString() + '\n')
                .then(() => console.log("sort file name saved."))
                .catch((err) => console.log(err))
        })
        .catch((err) => console.log(err))
}




function deleteFile(readfile) {
    return new Promise((res, rej) => {
        data = fs.promises.readFile(readfile)
            .then((data) => {
                fileNameArray = data.toString().trim().split("\n")
                fileNameArray.forEach(data => {
                    return fs.promises.unlink(data)
                        .then(() => console.log("All file deleted!"))
                        .catch((err) => console.log(err))
                })
            })
    })
}



module.exports = { fileRead, convertToUpperCase, splitIntoSentences, sortData, deleteFile }
