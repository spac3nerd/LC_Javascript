let angleClock = (hour, minutes) => {
    let hourAngle = ((hour % 12) * 30) + ((minutes / 60) * 30);
    let minuteAngle = (minutes / 60) * 360;
    let difference = Math.abs(minuteAngle - hourAngle);
    return difference > 180 ? 360 - difference: difference;
};


let test1 = () => {
    console.log(angleClock(12, 30));
    console.log(angleClock(3, 15));
    console.log(angleClock(1, 57));
};


runTest = () => {
    test1();
};


runTest();
