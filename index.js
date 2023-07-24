//   factory function

function adu (l,b){

    return obj = {

        name :"adu",
        age :"22",
        len:l,
        bre :b,
        draw: function(){

            console.log("hare krishna")
        }
    };

}
 const adi = adu(2,3) ;

 adi.color ='BLACK'

 delete adi.color ;

 console.log(adi);