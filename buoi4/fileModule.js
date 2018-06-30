const fs = require('fs');


const readFileCustom = function(filePath, onReadFileDone){
    fs.readFileCustom(filePath, "", function(err){
        if(err) console.log(err)
        else console.log("Ghi FIle thanh cong");
    });
}


module.exports = writeFileCustom;