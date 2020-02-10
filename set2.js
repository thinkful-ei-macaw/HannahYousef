function jediName (firstName, lastName){
    return lastName.slice(0,3)+firstName.slice(0,2);
}
function beyond(num){
    if (num === Infinity || -Infinity){
       return 'And beyond';
    }
    else if (num === 0){
        return 'Staying home';
      }
    else if (num % 2 === 0){
        return 'To infinity';
   }
    else (num % 2 !== 0){
        return 'To negative infinity';
    }
}
console.log(beyond(0));
function decode(string){
   let message='';
    for(let i=0;i<string.length;i++){
        if (string[i] === 'a'){
            message = string[2];
        }
    };
}
