const fileSystem = require("fs");

function searchFile(path, options) {
    const regex = /\[([^\s\d\{])+?.+?(\s*?).*?\](\s*?)(\(http.*?)\)/g;
    
    let p = new Promise(function(resolve, reject) {
        fileSystem.readFile(path, 'utf-8', (err, data) => {
            if(err) { 
                reject(err.message); 
            }
            else {
                let links = data.match(regex);
                let linkArray = [];
                let link = [];
          
                links.forEach((item) => {
                    link = item.replace(/\[|\)/gm, "").split('](');
                    linkArray.push({text: link[0],href: link[1],file: path});
                });
                
                resolve(linkArray);
            }
        })
    })
            
    return p;
}

module.exports = searchFile;2