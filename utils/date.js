const convertIntoTwoDigit = require("./convertIntoTwoDigit");

/**
 * Date should be in format of mm-dd-yyyy
 */
let parseDate = (date) => {
    try {

        let _date = String(date).split("-");
        return new Date(`${_date[0]}-${_date[1]}-${_date[2]}`);

    } catch (error) {
        throw error;
    }
}

/**
 * This function will take two arguments 
 * @param {Date} startDate
 * @param {Date} endDate
 * @returns {[]} an arrays of working days in format of [mm-dd-yyyy]
 */

let workingDays = (startDate, endDate) => {
    try {
        let exclude = [0, 6];
        let ans = [];
        for (let i = startDate; i <= endDate; i.setDate(i.getDate() + 1)) {
            if (!exclude.includes(i.getDay()))
                ans.push(`${convertIntoTwoDigit(i.getMonth() + 1)}-${convertIntoTwoDigit(i.getDate())}-${i.getFullYear()}`)
        }
        return ans;
    } catch (error) {

    }

}

/**
 * This method will take date as input
 * @param {Date} date 
 * @returns {Date} The Last date of the Month
 */

let lastDateOfMonth = (date) => {
    try {
        let getFullYear = date.getFullYear();
        let month = date.getMonth() + 1;
        let lastDay = new Date(getFullYear, month, 0).getDate();
        return new Date(`${getFullYear}-${convertIntoTwoDigit(month)}-${lastDay}`);
    } catch (error) {
        throw error
    }
}

module.exports = { parseDate, workingDays, lastDateOfMonth }