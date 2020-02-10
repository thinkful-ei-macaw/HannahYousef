function createGreeting(name, age){
    let yearOfBirth = 2020 - age
    return `I was born ${yearOfBirth}`
    

}

const firstGreeting = createGreeting("yousef", 26);
console.log(firstGreeting)