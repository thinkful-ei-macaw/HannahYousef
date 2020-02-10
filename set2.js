'use strict';
function jediName (firstName, lastName){
  return lastName.slice(0,3)+firstName.slice(0,2);
}
function beyond(num){
  if (num === Infinity || num === -Infinity){
    return 'And beyond';
  }
  else if (num === 0){
    return 'Staying home';
  }
  else if (num % 2 === 0){
    return 'To infinity';
  }
  else if (num % 2 !== 0){
    return 'To negative infinity';
  }
}
console.log(beyond(5));