import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

let filepath = fileURLToPath(import.meta.url)
let __dirname = path.dirname(filepath)

console.log(__dirname)

let folderpath = path.join(__dirname,"newf","new")

let created_folder = fs.mkdirSync(folderpath, { recursive: true })
let filename = path.join(created_folder,"txt2.txt")
let data = fs.writeFileSync(filename,"kya hal hai ","utf-8")
console.log("File created successfully",data);
