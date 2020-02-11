
function getYearOfBirth(age) {
    return 2020 - age
}

const firstGreeting = createGreeting("yousef", 26);
console.log(firstGreeting)

}function createGreeting(name, age){
    if (name === undefined && age === undefined){
    throw new Error ('Arguments not valid')
  }
    if (age < 0) {
      throw new Error ('Age ca nnot be negative')
    }
    if (typeof age !== Number) {
      throw new TypeError("Age should be a number")
    }
    let year = getYearOfBirth(age) {
        return `I am ${name} and I am ${age} year old. 
        I was born in the year ${year}`
    }
}