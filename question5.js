const path = require('path')

function checkFileExtension(filePath, expectedExtension) {
    let ext = path.extname(filePath, expectedExtension);
    if(expectedExtension===ext){
        console.log('File has the expected extension: '+ext);
    }
    else{
        console.log("File does not have the expected extension. Expected:"+ 
        `${expectedExtension}`+", Actual: " +`${ext}`);
    }
}

checkFileExtension('test-files/file1.txt', '.txt');
// checkFileExtension('test-files/image.png', '.jpg');