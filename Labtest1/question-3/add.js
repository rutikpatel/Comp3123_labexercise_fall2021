const fs = require('fs');
let filepath;
for(let i = 0;i<10;i++){
    filepath = `log${i}.txt`
    fs.writeFile(filepath,`Rutik file: ${i}`,(err)=>{
        if (err) {
            return console.error(err);
        }
    })
}
console.log("Files has been created")