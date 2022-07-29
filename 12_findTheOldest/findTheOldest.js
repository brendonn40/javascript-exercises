const findTheOldest = function(arrayOfObj) {
    currentYear = new Date().getFullYear()
    let oldest = {name:"teste",yearOfBirth:currentYear,yearOfDeath:currentYear}
    for (const {people} in arrayOfObj ){
        if("yearOfDeath" in {people}){
            if(people.yearOfDeath - people.yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth){
                oldest = people
            }
        }else{
            people["yearOfDeath"] = currentYear
            if(people.yearOfDeath - people.yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth){
                oldest = people
        }  
    }
}   
    return oldest
}

// Do not edit below this line
module.exports = findTheOldest;
