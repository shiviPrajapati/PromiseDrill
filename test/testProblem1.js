const test = require('../problem1.js')
const path =require('path')

function createAndDelete(dir, filepath) {
    let Path = path.join(__dirname, dir);

    test.createDir(Path)
    .then(() => {
        return test.createFile(filepath, "hello")
    })
    .then(() => {
        return test.deleteFile(filepath)
    })
    .catch((rej) => {
        console.log(rej)
    })
}

createAndDelete('../dir', './dir/randon.json')
createAndDelete('../dir1', './dir1/randon.json')





// Promise.all([test.createDir(Path), test.createFile('./dir3/random.json',"hello"), test.deleteFile('./dir3/random.json')])
// .then(() => {
//     console.log('directory created\n file created\n file deleted')
// }).catch((err) => {
//     console.log(err)
// })

