'use strict'

var s = 'Hello';
function greet(name){
    console.log(s + ',' + name + '!');
}

function test(testParam){
    console.log('test  ' + testParam);
}

module.exports = {
    greet:greet,
    test:test
};