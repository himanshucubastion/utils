import isMty from './isMty'
import parseNumber from './parseNumber';
module.exports = (amount, percent) => {
    try {
        amount = isMty(amount) ? 0 : parseFloat(amount);
        percent = isMty(percent) ? 0 : parseFloat(percent);
        return parseNumber(amount * percent / 100);
    } catch (error) {
        throw error;
    }
}