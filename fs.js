const fs = require('fs')

// let fileContent = fs.readFileSync('test-files/file1.txt')
// console.log('Output:' + fileContent);

// fs.appendFileSync('test-files/file1.txt', ' Hello I am writing in the file for the 2nd time.')
// let fileContent = fs.readFileSync('test-files/file1.txt')
// console.log('Output:' + fileContent);

// fs.unlinkSync('test-files/file1.txt')


// fs.mkdirSync('myNewDir');

// let path = '/home/spider004/Nodejs-30-Days-Challenge-Scaler-Topics/myNewDir'
// let content = fs.readdirSync(path)
// console.log(content)

let path = '/home/spider004/Nodejs-30-Days-Challenge-Scaler-Topics/myNewDir'
let content = fs.rmdirSync(path);
console.log(content)