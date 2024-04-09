let cash = document.querySelector(".cash") 
let gold = document.querySelector(".gold") 

let ans =document.querySelector(".ans")


let gram =  +20068.61 

function calc(){
    console.log((((gram * gold.value) + +cash.value)*2.5)/100 ) 
    ans.innerHTML  = `${(((gram * gold.value) + +cash.value)*2.5)/100}  `
}


// let zakat = `${(+cash +gram * 2.5% ) }  `
// console.log(zakat);

// console.log((20168.61 * 2.5)/100  );

// function calc(){
// ans.innerHTML = ` ` 


// }




// console.log(gram * grams);































// let input  = document.querySelector(".input")
// let ans = document.querySelector(".ans")

// // ans.innerHTML = input.value


// function print() {
//     ans.innerHTML = input.value
// }

// function upper() {
//     ans.innerHTML = input.value.toUpperCase()
// }

// function lower() {
//     ans.innerHTML = input.value.toLowerCase()
// }

// function remove() {
//     ans.innerHTML = ""
//     input.value = "" 
// }
