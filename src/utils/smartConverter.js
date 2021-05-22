const smartConverter = (number) => {
    let month = getMonth(number);
    let day = number - daysToRemove(month)
    return `${month} ${day}`
}

export default smartConverter;

function getMonth(day){
    if (day <= 31 ) {
        return "January"
    } else if (day < 31 && day <= 59) {
        return "February"
    } else if (day <= 90) {
        return "March"
    } else if (day <= 120) {
        return "April"
    } else if (day <= 151) {
        return "May"
    } else if (day <= 181) {
        return "June"
    } else if (day <= 212) {
        return "July"
    } else if (day <= 243) {
        return "August"
    } else if (day <= 273) {
        return "September" 
    } else if (day <= 304) {
        return "October"
    } else if (day <= 334) {
        return "December"
    }
}

const daysToRemove = {
    January: 0, //31
    February: 31, //28
    March: 59, //31
    April: 90, //30
    May: 120, //31
    June: 151, //30
    July: 181, //31
    August: 212, //31
    September: 243, //30
    October: 273, //31
    November: 304, //30
    December: 334, //31

}