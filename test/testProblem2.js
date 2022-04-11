const test = require('../problem2.js')
const path = require('path')

test.fileRead('lipsum.txt')
    .then((res) => {
        console.log("file Readed: ", res)
        return test.convertToUpperCase('lipsum.txt', 'fileOfUpperData.txt');
    })
    .then(() => {
        return test.splitIntoSentences('fileOfUpperData.txt', 'fileOfSentences.txt')
    })                    
    .then(() => {
        return test.sortData('fileOfSentences.txt', 'fileOfSortedData.txt')
    })
    .then(() => {
        return test.deleteFile('test/filenames.txt')
    })
    .then((res) => {console.log(res)})
    .catch((err) => console.log(err))
