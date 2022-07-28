const palindromes = function (string) {
    newString = string.replaceAll(",","").replaceAll(".","").replaceAll(" ","").replaceAll("!","").toLowerCase()
    if(newString.split("").toString() === newString.split("").reverse().toString()){
        return true
    }else{
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
