function isLeapYear  (year){
    const remainder = year % 4;
    if(remainder === 0){
        console.log('Your year is leap year', year)
    }
    else{
        console.log('Your year is not leap year', year)
    }
}
isLeapYear(1933);