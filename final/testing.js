var fs = require('fs');
   cloudconvert = new (require('cloudconvert'))('qbSKGdtOeHuhfn2aS8UmQ4BqI9j3uhlQNNzDwhjs0SE2lz1fkFETAZrZIzuidA7E9fxK9GS3mQUFzChK7s7b1A');

fs.createReadStream('./uploads/abc.doc') // input file
.pipe(cloudconvert.convert({
   "inputformat": "doc",
   "outputformat": "docx",
   "input": "upload"
}))
.pipe(fs.createWriteStream('./abc.docx')); //output file
