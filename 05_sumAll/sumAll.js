const sumAll = function(x_int,y_int) {
    let sum=0
    if(x_int < 0|| y_int <0 || typeof(x_int)!== "number" || typeof(y_int)!== "number"){   //checagem de argumento 
        return "ERROR"
    }

    if(x_int > y_int){
        for (let i = y_int; i <= x_int; i++) {
            sum+=i
        }
    }else{
        for (let i = x_int; i <= y_int; i++) {
            sum+=i
        }
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
