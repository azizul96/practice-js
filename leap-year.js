function findingLeapYear(year){
    const leapYear = year % 4;
    if(leapYear==0){
        console.log(year, " Is leap year", )
    }
    else{
        console.log(year, " Is not leap year", )
    }

}
findingLeapYear(2100);