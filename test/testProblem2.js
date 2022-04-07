const test = require('../problem2.js')
const path = require('path')
const { deleteFile } = require('../problem1.js')

test.fileRead('lipsum.txt')
    .then((res) => {
        console.log(res)
        test.convertToUpperCase('lipsum.txt', 'fileOfUpperData.txt')
            .then((res) => {
                console.log(res)
                test.splitIntoSentences('fileOfUpperData.txt', 'fileOfSentences.txt')
                    .then((res) => {
                        console.log(res)
                        test.sortData('fileOfSentences.txt', 'fileOfSortedData.txt')
                            .then((res) => {
                                console.log(res)
                                test.deleteFile('test/filenames.txt')
                                .then((res) => {
                                    console.log(res)
                                })
                            })
                    })
            })
    }).catch((rej) => {
        console.log(rej)
    })


    // Promise.all ([test.fileRead('lipsum.txt'), test.convertToUpperCase('lipsum.txt', 'fileOfUpperData.txt'), test.splitIntoSentences('fileOfUpperData.txt', 'fileOfSentences.txt'), test.sortData('fileOfSentences.txt', 'fileOfSortedData.txt'), deleteFile('test/filenames.txt')])
    // .then(() => {
    //     console.log("all task completed")
    // })
    // .catch((err) => {
    //     console.log(err)
    // })