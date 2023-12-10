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

// const { createServer } = require('http');
// const server = createServer((req, res) => {
//     if (req.url === '/') {
//         res.end('Home Page');
//     }
//     else (req.url === 'about')
//     {
//         res.end('About Page');
//     }
//     res.end('Error Page');
//     // res.write('Welcome to our home page');
//     res.end();
// });

// server.listen(5000, ()=>{
//     console.log('Server is listening on port 5000');
// });

// const {readFile} = require('fs');

// readFile('./content/first.txt', 'utf-8', (err, data)=>{
//     if (err){
//         return
//     }
//     else {
//         console.log(data);
//     }
// })
// const getText = (path)=>{
//  return new Promise((resolve, reject)=>{
//     readFile(path, 'utf-8', (err, data)=>{
//         if(err){
//          reject(err);
//         }
//         else{
//             resolve(data);
//         }
//     })
//  })
// }
// getText('./content/first.txt');

// const start = async () =>{
//     const first = await getText ('./content/first.txt')
//     console.log(first);
// }
// start();

// const EventEmitter = require('events');

// const customEmitter = new EventEmitter();

// customEmitter.on('response', ()=>{
//     console.log(`data recieved`);
// });
// customEmitter.emit('response');

// STREAMS

// Four different types of Streams 
// ---------Writeable (To write data sequentially)
// ---------Readable (To read data sequentially)
// ---------Duplex (To both read and write data sequentially)
// ---------Transform(To modify data sequentially, when writing or reading)

// Streams are used to red and write sequentially.  To handle and manipulate streaming data

// While reading files

// const {createReadStream} = require('fs');
// const stream = createReadStream ('./content/big.txt');
// stream.on('data', ()=>{
//     console.log(result);
// }); 

// While writing files and what do you mean by oretend texting and if you cant understand it then why the hell are you doing it doing it and then doing it again sdoing ti an then doing it again and then doing it                                                 

console.log('express tuitorial');

const {createServer} = require('http');
const {readFileSync} = require('fs');

const homePage = readFileSync('./learning-express/index.html');
const homeStyles = readFileSync('./learning-express/navbar-app/styles.css');
// const homeLogo = readFileSync('./leaning-express/logo.svg');
const server = createServer((req,res)=>{
    const url = req.url;
    console.log(url);
    // homePage
    if (url === '/'){
        res.writeHead(200, {'content-type' : 'text/html'});
        res.write(homePage);
        res.end();
    }
    // aboutPage
    if(url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>about Page</h1>');
        res.end();
    }
    // styles
    if(url=== '/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'});
        res.write(homeStyles);
        res.end();
    }
    // 404
    // else {
    //     res.writeHead(404, { 'content-type': 'text/html'});
    //     res.write('<h1>page not found</h1>');
    //     res.end();
    // }
});
server.listen(5000);
