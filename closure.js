function Counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = Counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

// it will show 4times alert, as innerfunction is accessing to outer function and variable.
////////////////////////////////////////////////////////////////

let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // ans is 1
  }
  console.log(count); // ans is 0
})();
////////////////////////////////////////////////////////
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // ans is 3 3 3
    }, 1000);
  }
  //////////////////////////////////////////////////////
  function area(length) {
    return (breadth) => {
      console.log(length * breadth);
    }
  }
  
  area(4)(6);  // 100
////////////////////////////////////////////////  
function increase() {
    var i = 0;
    return inp = () => {
      console.log(++i);
    };
  }
  
  let v = increase();
  v();//1
  v();//2
  v();//3
  ////////////////////////////////
  var a = 12;
(function () {
  console.log(a);
})();      //12



////////////////////////////////////////////////
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    console.log(a);
  };
})();
x(); //a=12
// /////////////////////////////////////////

var globalVar = 'xyz';

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);

//         outerArg =  123
//         innerArg =  456
//         outerVar =  a
//         innerVar =  b
//         globalVar =  xyz