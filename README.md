 ## file-content-update

Updates the content inside a file or multiple files at once with newer content while removing the old content.

### Installation 
---
```npm install file-content-update```
### Functions
---
#### updateFiles(filespath, original_content, updated_content)
To update the content of files.

##### listFiles(filepath)
List the files in a particular directory.

### Usage
```
const file_update = require('file-content-update');
file_update.updateFiles('public/**/*.html', '</body>', '<script src="./app.js"></script></body>')
```

Appends the script file to all the html files in the public folder. 
