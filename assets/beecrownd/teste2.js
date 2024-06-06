// const fs = require('fs')
const { readFileSync } = require('fs')
var input = readFileSync('input.txt', 'utf8');

const linhas = input.split('\n');

let x = parseInt(linhas[0])
let y = parseInt(linhas[1])

let sum = 0;
// if (y > x) [x,y] = [y,x] 


for (let i = x; i <= y; i++){
    linhas[1]
    if (13 % i != 0 || i % 13 != 0) {
        sum =+ i
    }
    
}
console.log(sum)
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// const linhas = input.trim().split('\n')
// let numeros = linhas[0].split(" ")
// let A = parseInt(numeros[0])
// let B = parseInt(numeros[1])
// if (A % B === 0 || B % A === 0){
//     console.log("Sao Multiplos")
// }else{
//     console.log("Nao sao Multiplos")
// }

