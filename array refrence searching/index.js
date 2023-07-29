//   searching object in array 

let array = [
    {
        no :1 ,
        name : " prabhu shree ram"
    },

    {

        no :2,
        name :"pavan suuth hanuman ki jay "
    }
]

// console.log(array);


let job = array.find((item)=>{

    item.no = 1 ;
})

console.log(job)


