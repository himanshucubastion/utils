module.exports = (num) => {
    try {
        return parseInt(num) < 10 ? `0${num}` : num;
    } catch (error) {
        throw error
    }
}