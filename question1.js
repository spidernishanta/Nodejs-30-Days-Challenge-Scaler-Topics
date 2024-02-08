const fs = require('fs')

function readFileContent(filePath) {
    fs.readFile(filePath, (err, data)=>{
        if(data){
            console.log('File Content:\n'+ data);
        }
        else{
            console.error(err);
        }
    });
}

readFileContent('test-files/file1.txt');
// readFileContent('test-files/empty-file.txt');
// readFileContent('test-files/nonexistent-file.txt');