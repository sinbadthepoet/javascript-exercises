const sumAll = function(start, end) {
    if(start < 0 || end < 0) return "ERROR";
    if(!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
    let output = 0;
    if(end < start){
        let temp = end;
        end = start;
        start = temp;
    }
    for(let i = start; i <= end; i++){
        output += i;
    }
    return output;
};

// Do not edit below this line
module.exports = sumAll;
