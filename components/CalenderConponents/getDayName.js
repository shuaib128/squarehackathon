export function getDayName(month, date, year) {
    const FullDate = new Date(`${month}/${date}/${year}`)

    const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    return days[FullDate.getDay()];
}