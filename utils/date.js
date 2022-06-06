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

module.exports = { parseDate }