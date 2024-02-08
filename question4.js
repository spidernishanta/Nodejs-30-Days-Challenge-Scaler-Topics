const path = require('path')

function resolvePath(relativePath) {
    let newPath=path.resolve(relativePath)
    console.log('Resolved Path: '+ newPath)
}

resolvePath('../project/folder/file.txt')
// resolvePath('nonexistent-folder/file.txt')