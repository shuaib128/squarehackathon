//Get num of days in month
export var getDaysInMonth = function (month, year) {
    return new Date(year, month, 0).getDate();
}