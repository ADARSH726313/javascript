//   constuctor  function

function Adu (r,w) {
    this.name = "adarsh ";
    this.age = 23;
    this.runs= r;
    this.wicket = w ;

    this.draw = function() {

        console.log("hii how are u ?")
    };
}

const adi =  new Adu(10000,598) ;

adi.captian = "yes";

delete adi.captian;

console.log(adi);



