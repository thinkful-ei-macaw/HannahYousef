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
function decode(string){
  let message='';
  let phrase = string.split(' ');
  for (let i=0;i<phrase.length;i++){
    let word = phrase[i];
    if (word.charAt(0) === 'a'){
      message += word.charAt(1);
    }
    else if (word.charAt(0) === 'b'){
      message += word.charAt(2);
    }
    else if (word.charAt(0) === 'c'){
      message += word.charAt(3);
    }
    else if (word.charAt(0) === 'd'){
      message += word.charAt(4);
    }
    else {
      message += ' ';
    }
  };
  return message;
}
unction howManyDays(month, leapYear){
  let result = '';
  switch (month) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
      result = `${month} has 31 days`;
      break;
    case "April":
    case "June":
    case "September":
    case "November":
      result = `${month} has 30 days`;
      break;
    case "February":
      result = leapYear ? `February has 29 days` : `February has 28 days`;
      break;
    default:
      throw new Error('Must provide a valid month.');
  }

  return result;

}
function rps(choice) {
  if (choice < 1 && choice > 3 && typeof choice !== "number") {
      throw new Error("Must provide number between 1-3");
  }

  let options = ['rock', 'paper', 'scissors'];

  const randomNo = Math.floor(Math.random() * 3) + 1;
  
  let aI = options[randomNo-1];
  let human = options[choice-1];

  if ((choice === 1 && randomNo === 3) || (choice > randomNo)) {
      return `Human Wins! Human: ${human} Ai: ${aI}`;
  } else if ((randomNo === 1 && choice === 3) || (choice < randomNo)){
      return `Computer Wins! Human: ${human} Ai: ${aI}`;
  } else {
      return `Tie! Human: ${human} Ai: ${aI}`;
  }

}