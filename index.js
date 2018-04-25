function theBeatlesPlay(musicians,instruments) {
  var a = [];
  var b = musicians.length
  var i;
  for (i = 0; i < b; i++) {
    a.push(musicians[i] +" plays " + instruments[i]);
  
  }
  return a;
}

function johnLennonFacts(facts) {
  var i=0;
  while(i<facts.length) {
    facts[i]=facts[i] + "!!!";
    i++;
    
  }
  return facts
}

function iLoveTheBeatles(num) {
  var foo = [];
<<<<<<< HEAD
=======
  var i=0;
>>>>>>> 9b81517cd4990a7c27cbc8b458f8ade899d0b4d3
  do {foo.push("I love the Beatles!")
    i++;
  }
      
  while (i<=15);
<<<<<<< HEAD
  return foo
=======
>>>>>>> 9b81517cd4990a7c27cbc8b458f8ade899d0b4d3
}

/*
var test = [];
test.push(`I love the Beatles!`);
console.log(test);
for (i=0;i<15;i++) {
  test.push(`I love the Beatles! ${i}`);
}
console.log(test);
*/

var i=0;
var test2 = [];
do {test2.push(`I love the Beatles!`);
    i++;
}
while (i<=7)

console.log(test2);
