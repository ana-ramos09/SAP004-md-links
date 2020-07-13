const fileSystem = require("fs");
const searchFile = require('./searchFile.js');

function searchFolder(path, options) {
    let p = new Promise((resolve, reject) => {
        const filesArray = [];
        fileSystem.readdir(path, (err, files) => { 
            resolve(
                files.forEach(file => { 
                    searchFile(path,options);
                }) 
            )
        }) 
    })
    return p;
}

module.exports = searchFolder;