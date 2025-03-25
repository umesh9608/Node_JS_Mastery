// // console.log("File Handling in Node.js");
//***********simple read file ******************************** */
import { readFile, writeFile, appendFile, mkdir } from 'fs/promises';

// // Reading a file Content
// const read_file = async (fileName) => {
//     const data = await readFile(fileName, "utf-8"); 
//     console.log(data);
// }

// read_file('simple.txt')

//***********simple write file ******************************** */


//  const creat_file = async (fileName,content) =>{
//     await writeFile(fileName, content);
//     console.log("File Created Successfully");
//  }

//  creat_file('ai.py', 'this is a testing write file') //we can create multiple files by changing the file name

//***********simple append file (add some text in existing file) ******************************** */


// const append_file = async (fileName,content) =>{
//     await appendFile(fileName, content);
//     console.log("File Appended Successfully");
//  }

//  append_file('ai.py', 'this is a testing append file') //we can append multiple files by changing the file name

//***********create folder - directory ******************************** */

// const creat_dir = async (dir) =>{
//     await mkdir(dir);
//     console.log("Directory created sussefully");

// }

// creat_dir('components')


//***********now we want src/components/java******************************** */
const creat_dir = async (dir) =>{
    await mkdir(dir,{recursive:true})
}

creat_dir('src/components/java')