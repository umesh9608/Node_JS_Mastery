//console.log("Path module")

import path from 'path';

//join two or more file
const fullPath = path.join('./path', 'index.js','simple.txt')
// console.log("file Join =", fullPath)


//absolute path (orginal path)
const absolutePath = path.resolve();
//console.log("We are currently working on this path =", absolutePath)

//extesion name
const extname = path.extname('resume.pdf') //check .pdf, .doc etc
if(extname == '.pdf'){
    console.log("ok")
}else{
    console.log("not supported")
}


//