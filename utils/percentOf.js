let parseNumber = require('./parseNumber');
let isMty = require('./isMty');

module.exports = (amount, percent) => {
    try {
        amount = isMty(amount) ? 0 : parseFloat(amount);
        percent = isMty(percent) ? 0 : parseFloat(percent);
        return parseNumber(amount * percent / 100);
    } catch (error) {
        throw error;
    }
}