const removeFromArray = function(array, ...args) {
    const output = [];
    for(index of args){
        array.splice(index, 1);
    }
};

// Do not edit below this line
module.exports = removeFromArray;
