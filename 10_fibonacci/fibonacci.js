const fibonacci = function(member) {
    let array =[1,1]
    if(member < 0){
        return "OOPS"
    }
    for (let i = 2; i < member; i++) {
        array.push(array[i-2]+array[i-1])
    }
    return array[member-1]
}

// Do not edit below this line
module.exports = fibonacci;
