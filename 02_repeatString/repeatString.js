const repeatString = function(stringToRepeat, cycles) {
    if(cycles < 0) return 'ERROR';
    let output = '';
    for(let i = 0; i < cycles; i++){
        output += stringToRepeat;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;