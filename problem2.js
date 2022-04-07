
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
    return data = fs.promises.readFile(file, 'utf-8')
}




function convertToUpperCase(readfile, writefile) {
    return new Promise((res, rej) => {
        data = fs.promises.readFile(readfile, 'utf-8')
            .then((data) => {
                fs.promises.writeFile(writefile, data.toString().toUpperCase())
                    .then(() => {
                        res("Data converted to upperCase!")
                        fs.promises.writeFile('./test/filenames.txt', writefile.toString() + '\n')
                            .then((res) => console.log("uppercase file name saved."))
                            .catch((err) => console.log(err))
                    })
                    .catch((err) => rej(err))
            })
    })
}




function splitIntoSentences(readfile, writefile) {
    return new Promise((res, rej) => {
        data = fs.promises.readFile(readfile)
            .then((data) => {
                let dataInLower = data.toString().toLowerCase();
                splitData = dataInLower.split(".").join("\n");
                fs.promises.writeFile(writefile, splitData, 'utf-8')
                    .then(() => {
                        res("Data converted to Sentences!")
                        fs.promises.appendFile('./test/filenames.txt', writefile.toString() + '\n')
                            .then(() => console.log("split file name saved."))
                            .catch((err) => console.log(err))
                    })
                    .catch((err) => rej(err))
            })
    })
}




function sortData(fileread, filewrite) {
    return new Promise((res, rej) => {
        data = fs.promises.readFile(fileread)
            .then((data) => {
                data = data.toString();
                let sortdata = data.split('\n').sort().join('\n');
                fs.promises.writeFile(filewrite, sortdata, 'utf-8')
                    .then(() => {
                        res("Data is Sorted!")
                        fs.promises.appendFile('./test/filenames.txt', filewrite.toString() + '\n')
                            .then(() => console.log("sort file name saved."))
                            .catch((err) => console.log(err))
                    })
                    .catch((err) => rej(err))
            })
    })
}




function deleteFile(readfile) {
    return new Promise((res, rej) => {
        data = fs.promises.readFile(readfile)
            .then((data) => {
                fileNameArray = data.toString().trim().split("\n")
                fileNameArray.forEach(data => {
                    fs.promises.unlink(data)
                        .then(() => res("All file deleted!"))
                        .catch((err) => rej(err))
                })
            })
    })
}



module.exports = { fileRead, convertToUpperCase, splitIntoSentences, sortData, deleteFile }