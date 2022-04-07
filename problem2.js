
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
    return new Promise((res, rej) => {
        fs.readFile(file, (err, data) => {
            if (!err) {
                res("file readed!")
                //res(data)
            }
            else {
                rej(err)
            }
        })
    })
}




function convertToUpperCase(readfile, writefile) {
    return new Promise((res, rej) => {
        fs.readFile(readfile, (err, data) => {
            if (!err) {
                fs.writeFile(writefile, data.toString().toUpperCase(), (err) => {
                    if (!err) {
                        res("Data converted to upperCase!")
                        // res(data.toString().toUpperCase())
                        fs.writeFile('./test/filenames.txt', writefile.toString() + '\n', function (err) {
                            if (err) {
                                console.log(err);
                            }
                            console.log("uppercase file name saved.");
                        });
                    }
                    else {
                        rej(err)
                    }
                })
            }
            else {
                console.log(err)
            }
        })
    })
}




function splitIntoSentences(readfile, writefile) {
    return new Promise((res, rej) => {
        fs.readFile(readfile, (err, data) => {
            if (!err) {
                let dataInLower = data.toString().toLowerCase();
                splitData = dataInLower.split(".").join("\n");
                fs.writeFile(writefile, splitData, 'utf-8', (err) => {
                    if (!err) {
                        res("Data converted to Sentences!")
                        // res(splitData)
                        fs.appendFile('./test/filenames.txt', writefile.toString() + '\n', function (err) {
                            if (err) console.log(err);
                            console.log("split file name saved.")
                        });
                    }
                    else {
                        rej(err)
                    }
                })
            }
            else {
                console.log(err)
            }
        })
    })
}




function sortData(fileread, filewrite) {
    return new Promise((res, rej) => {
        fs.readFile(fileread, (err, data) => {
            if (!err) {
                data = data.toString();
                let sortdata = data.split('\n').sort().join('\n');
                fs.writeFile(filewrite, sortdata, 'utf-8', (err) => {
                    if (!err) {
                        res("Data is Sorted!")
                        // res(sortdata)
                        fs.appendFile('./test/filenames.txt', filewrite.toString() + '\n', function (err) {
                            if (err) console.log(err);
                            console.log("sort file name saved.")
                        });
                    }
                    else {
                        rej(err)
                    }
                })
            }
            else {
                console.log(err)
            }
        })
    })
}




function deleteFile(readfile) {
    return new Promise((res, rej) => {
        fs.readFile(readfile, (err, data) => {
            if (!err) {
                fileNameArray = data.toString().trim().split("\n")
                fileNameArray.forEach(data => {
                    fs.unlink(data, () => {
                        if (!err) {
                            res("All file deleted!")
                            // res("deleted")
                        }
                        else {
                            rej(err)
                        }
                    })
                });
            }
            else {
                console.log(err)
            }
        })
    })
}



module.exports = { fileRead, convertToUpperCase, splitIntoSentences, sortData, deleteFile }