const test = require('../problem2.js')
const path = require('path')

test.fileRead('lipsum.txt')
    .then((res) => {console.log("file Readed")
        test.convertToUpperCase('lipsum.txt', 'fileOfUpperData.txt')
            .then((res) => {console.log(res)
                test.splitIntoSentences('fileOfUpperData.txt', 'fileOfSentences.txt')
                    .then((res) => {console.log(res)
                        test.sortData('fileOfSentences.txt', 'fileOfSortedData.txt')
                            .then((res) => {console.log(res)
                                test.deleteFile('test/filenames.txt')
                                .then((res) => {console.log(res)})
                            })
                    })
            })
    }).catch((rej) => console.log(rej))


