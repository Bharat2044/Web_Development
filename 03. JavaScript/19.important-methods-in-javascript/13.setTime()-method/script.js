console.log(Date());
console.log(new Date());

const currDate = new Date('March 12, 2023, 02:27:30');
console.log(currDate);

const sameDate = new Date();
sameDate.setTime(currDate.getTime());
console.log(sameDate);