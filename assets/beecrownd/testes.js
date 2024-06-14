// const fs = require('fs')
const { readFileSync } = require('fs')
var input = readFileSync('input.txt', 'utf8');

const linhas = input.trim().split('\n')

for(var i = 0;i < linhas.length - 1; i++){
    let a = linhas[i].split(' ')
    console.log(a)
    let x = a[0]
    let y = a[1]

    // if (x > y) {
    //     console.log("Decrescente")
    // }else if(y > x){
    //     console.log("Crescente")
    // }
}

