const fileSystem = require("fs");
const searchFile = require('./funcoes/searchFile.js');
const searchFolder = require('./funcoes/searchFolder.js');

function mdLinks(path, options = []) {
  return new Promise(function(resolve, reject) { 
    fileSystem.stat(path, (err, stats) => { 
      if( !err ){ 
        if(stats.isFile()){ 
          resolve(searchFile(path,options));
        } 
        else if(stats.isDirectory()){ 
          resolve(searchFolder(path,options));
        } 
      } 
      else {
        reject('No .md file found!');  
      }
    }); 
  })
}
module.exports = mdLinks;
