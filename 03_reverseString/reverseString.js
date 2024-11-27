const reverseString = function(text) {
    let reversed = '';
    for(let i = text.length - 1; i > -1; i = i - 1){
        reversed += text.charAt(i);
    }
    console.log(reversed);
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
