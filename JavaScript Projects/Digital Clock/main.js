window.addEventListener('load', calculateTime)

function calculateTime() {
	var date = new Date();
	//console.log(date);

	var dayNumber = date.getDay();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var ampm = hour >= 12 ? 'PM' : 'AM';
	var dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

	//convert into 12 hour clock
	hour = hour % 12;
	hour = hour ? hour : '12';

	//Check its less than 10 - 09, 08 for hours
	hour = hour < 10 ? '0' + hour : hour;

	minute = minute < 10 ? '0' + minute : minute;
	document.getElementById('day').innerHTML = dayNames[dayNumber];
	document.getElementById('hour').innerHTML = hour;
	document.getElementById('minute').innerHTML = minute;
	document.getElementById('ampm').innerHTML = ampm;

	//get most current time
	setTimeout(calculateTime, 200);
}
//calculateTime();
