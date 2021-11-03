let fs = require('fs'); 

for(i = 0;i<10;i++){
    let filename = `log${i}.txt`
    if(fs.existsSync(`./log${i}.txt`)){
        fs.unlink(filename, (e => {
            if (e)console.log(e);   
            
        }));
        console.log("File Deleted :" +filename)
    }  
    else if(!fs.existsSync(`./log${i}.txt`)) {
        console.log("File not found :" +filename)
    }
    
} 