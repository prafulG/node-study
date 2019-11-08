var fs = require("fs");

/*fs.unlink('demo.txt', (err)=> {
  if(err) throw err;
  console.log("file deleted");
});*/

fs.rename('demo.txt', 'demo-rename.txt', (err)=> {
  if(err) throw err;
  console.log("file deleted");
});
