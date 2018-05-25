'use strict'

var fs = require('fs');

fs.readFile('sample.txt','utf-8',function(err,data){
    if(err){
       console.log(err);
    } else {
       console.log(data);
    }
});

fs.readFile('m252.png',function(err,data){
    if(err){
       console.log(err);
    } else {
       var text = data.toString('utf-8');
       //console.log(text);
       console.log(data.length);
    }
});

try
{
var data = fs.readFileSync('sample.txt','utf-8');
console.log(data);
} catch(err){

}

var data = 'Hello,Node.js!';
fs.writeFile('output.txt',data,function(err){
    if(err){
       console.log(err);
    } else {
       console.log('OK');
    } 
});

fs.writeFileSync('output1.txt', data);

