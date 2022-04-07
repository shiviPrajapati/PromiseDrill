const test = require('../problem1.js')
const path =require('path')
let Path = path.join(__dirname, '../dir2');

// test.createDir(Path).then((res) => {
//     console.log(res)
//     test.createFile('./dir2/random.json',"hello")
//     .then((res) => {
//         console.log("file created: ",res)
//         test.deleteFile('./dir2/random.json')
//         .then((res) => {
//             console.log("file deleted: ",res)
//         })
//     })
// }).catch((rej) => {
//     console.log(rej)
// })


Promise.all([test.createDir(Path), test.createFile('./dir2/random.json',"hello"), test.deleteFile('./dir2/random.json')])
.then(() => {
    console.log('directory created\n file created\n file deleted')
}).catch((err) => {
    console.log(err)
})