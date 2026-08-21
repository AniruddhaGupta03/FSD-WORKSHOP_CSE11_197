import fs from "node:fs/promises";

const filepath = "userdata.json";

async function createFile(data) {
    try {
        await fs.writeFile(filepath, JSON.stringify(data, null, 2), "utf8");
        console.log("file created successfully");
    } catch (err) {
        console.log("error in creating file");
    }
}

async function readFile() {
    try {
        const content = await fs.readFile(filepath, "utf8");
        const data = JSON.parse(content);
        console.log(data);
        return data;
    } catch (err) {
        console.log("error in reading file");
    }
}

async function deleteFile() {
    try {
        await fs.unlink(filepath);
        console.log("file deleted successfully");
    } catch (err) {
        console.log("error in deleting file");
    }
}

// "append" for JSON means merging new data into the existing object
async function appendFile(newData) {
    try {
        const content = await fs.readFile(filepath, "utf8");
        const existingData = JSON.parse(content);
        const updatedData = { ...existingData, ...newData };
        await fs.writeFile(filepath, JSON.stringify(updatedData, null, 2), "utf8");
        console.log("file appended successfully");
    } catch (err) {
        console.log("error in appending file");
    }
}

await createFile({ firstName: "Hello", lastName: "Aniruddha" });
await readFile();
await appendFile({ lastName: "gupta" });
await readFile();
await deleteFile();