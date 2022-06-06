const isMty = require("./isMty");
/*
    Return number upto 2 decimal places
*/
module.exports = (num) => {
    try {
        num = isMty(num) ? 0 : num;
        return parseFloat(parseFloat(num).toFixed(2));
    } catch (error) {
        throw error;
    }
}