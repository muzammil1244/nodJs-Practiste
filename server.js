
import path from "path"
import { fileURLToPath } from "url"


let filepath = fileURLToPath(import.meta.url) // output is file proper path
let __dirname = path.dirname(filepath) // output : folder path in which this file exist

console.log(__dirname)

let newpath = path.join("newf","one","two","three")
console.log(newpath) // add new path 

console.log(path.resolve(newpath))