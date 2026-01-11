function compareDateTime(datetimeString1, datetimeString2) {
    let dateTime1 = new Date(datetimeString1);
    let dateTime2 = new Date(datetimeString2);
    return ( dateTime1.getTime() > dateTime2.getTime() ) & (dateTime1.getDate() >= dateTime2.getDate() );
}

module.exports = {
    compareDateTime,
}