// BUILT IN MODULES
const os = require('os');

const obj = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory : os.freemem(),
}
console.log(obj)

const path = require('path');
console.log(path);

const filePath = path.join('content', '/subholder', 'test.txt');
console.log(filePath);

const absolutePath = path.resolve('content', 'subfolder', 'test.txt');
console.log(absolutePath);

// const file = require('fs');
// console.log(file);