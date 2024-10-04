


// let val = require('./test');


// console.log(val.arrayTwo);

// let { array } = require('./test');

// console.log(array);


// const os = require('os');

// console.log(os.platform(),os.version(),os.homedir());


const fs = require('fs');

//Reading async

// fs.readFile('./TestFile.txt', (err , data) => {

//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data.toString());
//     }
// });


//Write File

// let array = [];

// for(let i = 0; i < 1000;i++){
//     array.push = "Writing Line Number "+i.toString();
// }

// fs.writeFile('./TestFile2.txt', "What", (err) => {

//     if(err){
//         console.log(err);
//     }else{
//         console.log("File was Written");

//     }
// })


//directories


// if(!fs.existsSync('./Test')){

//     fs.mkdir('./Test' , (err) => {
//         if(err){
    
//             console.log(err);
//         }else{
//             console.log("FolderCreated");
//         }
//     });

// }else{
//     console.log("Folder Exists");
//     fs.rmdir('./Test' , (err) => {
//         if(err){
    
//             console.log(err);
//         }else{
//             console.log("Folder Deleted");
//         }
//     });

// }


//DeleteFiles

// if(fs.existsSync('./TestFile2.txt')){
//     fs.unlink('./TestFile2.txt', (err) =>{
//         if(err){
//             console.log(err);
//         }else{
//             console.log("File Deleted");

//         }
//     });
// }else{
//     console.log("No File Found");
// }


//Streams

const readStream = fs.createReadStream('./TestLarge.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./TestLarge2.txt');


// readStream.on('data',(chunk) => {
//     console.log("____New Chunk_____");
//     console.log(chunk);
//     writeStream.write("\n ____New Chunk____\n");
//     writeStream.write(chunk);
// });



//Piping Read Writing

readStream.pipe(writeStream);
