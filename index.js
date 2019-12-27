const fs = require('fs');
var glob = require("glob")

function listFiles(src) {
    return new Promise(function (resolve, reject) {
        glob(src, function (err, res) {
            if (err) {
                return reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

function updateFiles(filespath, original_content, updated_content) {
    listFiles(filespath).then((files) => {
        files.forEach(file => {
            fs.readFile(file, 'utf8', function (error, data) {
                if (error) {
                    return console.log(`Error reading file: ${error}`);
                }
                let updateFile = data.replace(original_content, updated_content);
                fs.writeFile(file, updateFile, 'utf8', function (error) {
                    if (error) return console.log(`Error writing to file ${error}`);
                });
            })
        });
        return files;
    }).then((fileslist) => {
        if (fileslist.length == 0) {
            console.log('No files found')
        } else {
            console.log('Following file were updated');
            fileslist.forEach(file => {
                console.log(file);
            })
        }
    })
}

module.exports = {
    listFiles,
    updateFiles
}