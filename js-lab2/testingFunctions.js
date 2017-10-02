
// function myArrows(p1,p2) {
//   function(){ 
//     multiply1 = p1*p2;
//     divide1 = p1/p2;
//     add1 = p1+p2;
//     sub1 = p1-p2;
//   }
//     debugger;

//     all1 = [
//       multiply1,
//       divide1,
//       add1,
//       sub1
//     ];
//   console.log(all1);
// }
//   

function fatBastard(meal) {
  function whatsForDinner() {
    if (meal === 'Mini-Me') {
      console.log('The wee man is in my belly!');
    } else {
      console.log(`I'm eatin' a bit of ${meal}! Burp.`);
    }
  }
 
  return whatsForDinner();
}


const whatsForDinner = fatBastard('Kobe beef');
// whatsForDinner();



