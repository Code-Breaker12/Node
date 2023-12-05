// BUILT IN MODULES
// const os = require('os');

// const obj = {
//     name: os.type(),
//     release: os.release(),
//     totalMemory: os.totalmem(),
//     freeMemory : os.freemem(),
// }
// console.log(obj)

// const path = require('path');
// console.log(path);

// const filePath = path.join('content', '/subholder', 'test.txt');
// console.log(filePath);

// const absolutePath = path.resolve('content', 'subfolder', 'test.txt');
// console.log(absolutePath);

// const file = require('fs');
// console.log(file);

const { createServer } = require('http');
const server = createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home Page');
    }
    else (req.url === 'about')
    {
        res.end('About Page');
    }
    res.end('Error Page');
    // res.write('Welcome to our home page');
    res.end();
});

server.listen(5000, ()=>{
    console.log('Server is listening on port 5000');
});

const {readFile} = require('fs');

readFile('./content/first.txt', 'utf-8', (err, data)=>{
    if (err){
        return
    }
    else {
        console.log(data);
    }
})
const getText = (path)=>{
 return new Promise((resolve, reject)=>{
    readFile(path, 'utf-8', (err, data)=>{
        if(err){
         reject(err);
        }
        else{
            resolve(data);
        }
    })
 })
}
getText('./content/first.txt');

const start = async () =>{
    const first = await getText ('./content/first.txt')
    console.log(first);
}
start();

const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', ()=>{
    console.log(`data recieved`);
});
customEmitter.emit('response');
