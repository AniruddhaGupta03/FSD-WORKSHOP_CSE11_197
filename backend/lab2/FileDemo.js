import fs from "node:fs/promises";

const filepath = "userdata.txt";

async function createFile(content) {
    try {
        await fs.writeFile(filepath, content, "utf8");//exemption handling if sucessfully created file or not
        console.log("file created successfully");
    } catch (err) {
        console.log("error in creating file");
    }
}

async function readFile() {
    try {
        const content = await fs.readFile(filepath, "utf8");
        console.log(content);
    } catch (err) {
        console.log("error in reading file");
    }
}
async function deleteFile(){
    try{
        await fs.unlink(filepath);
        console.log("file deleted sucessfully");
    } catch (err) {
        console.log("error in deleting file");
    }
}

async function appendFile(content){
    try{
        await fs.appendFile(filepath,content,"utf8");
        console.log("file appended successfully");
    }
    catch(err){
        console.log("error in appending file");
    }
}
await createFile("Hello Aniruddha");
await readFile();
await appendFile("gupta");
await readFile();
deleteFile();