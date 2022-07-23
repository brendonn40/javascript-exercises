const removeFromArray = function(array,...itemsToBeRemoved) {
    for(const item of itemsToBeRemoved){
        if(array.includes(item)){
            index = array.indexOf(item)
            array.splice(index,1)
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
