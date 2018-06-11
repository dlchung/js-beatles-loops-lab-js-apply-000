function theBeatlesPlay(musicians, instruments) {
  var myArray = [];
  
  for(var i=0; i<musicians.length; i++) {
    myArray[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  
  return myArray;
}

function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0;
  while(i < facts.length) {
    newFacts[i] = `${facts[i]}!!!`;
    i++;
  }
  
  return newFacts;
}

function iLoveTheBeatles(number) {
  var myArray = [];
  var i = 0;
  do {
    i++;
    myArray.push("I love the Beatles!");
  } while(i<14);
  
  return myArray;
}