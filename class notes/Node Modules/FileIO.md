# FileIO

File streams work using promises, their documentation is somewhere within the oblivion that is Node.JS documentation

## Code Examples
```

// Create a new file with write mode
var fs = require('fs')

fs.open('mynewfile2.txt', 'w', function(err, file) {
  if (err) throw err;
  console.log('saved')

});
// Create a  new file using writeFile() method
// If File exists, it overwrites it

var fs = require('fs')
fs.writeFile('mynewfile3.txt', 'Hello content! \n', function(err) {
  if (err) throw err;
  console.log('Saved')
});

// Updating the file using appendFile
// appendFile adds the content at the end of the file

var fs = require('fs')
fs.appendFile('mynewfile1.txt', ' This is my text.', function(err) {
  if (err) throw err;
  console.log('Updated!')
});

// Creat a new file using appendFile() method
var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});


// Replace the content of the file
var fs = require('fs')
fs.writeFile('mynewfile3.txt', 'This is my text', function (err){
  if (err) throw err;
  console.log('Replaced')
})

// Delete a file
// If file doesn't exist, it errors out
var fs = require('fs')
fs.unlink('mynewfile2.txt', function (err){
  if (err) throw err;
  console.log('File deleted!')
});


// Rename a file
var fs = require('fs')
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function(err){
  if (err) throw err;
  console.log('File Renamed!')
});


```