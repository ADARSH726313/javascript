 let obj = {

    NAME:"HARI",
    age:24,
    life:"in pain"
 }

// let mac ={}
// for (const key in obj) {
//    mac[key]=obj[key]
// }
// console.log(mac)

// let mac = {...obj}
// console.log(mac)

let mac = Object.assign({},obj)
console.log(mac);