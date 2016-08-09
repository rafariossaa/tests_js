"use strict";

// Para probar a generar los dias para el calendarios

let year=2016,
    month=8;

let generaCalendario = function (year, month) {

    function isHoliday (date) {
    	return false;
    }

	//Sacada de http://stackoverflow.com/questions/222309/calculate-last-day-of-month-in-javascript
	function getDaysInMonth(m, y) {
	    return m===2 ? y & 3 || !(y%25) && y & 15 ? 28 : 29 : 30 + (m+(m>>3)&1);
	}

	let DoW=["D","L","M","X","J","V","S"];

	let lastday= getDaysInMonth(month, year);

	// Array para contener los dias
	let days = [];

	for (let i =0; i < lastday; i++) {
	    let auxDate = new Date(year, month-1, i+1,0,0,0,0);

	    days.push( { date: new Date(year, month-1, i+1,0,0,0,0),
	                 dow: DoW[auxDate.getDay()],
	                 holiday: false
	               }) ;
	}


    return days;
}


let dias = generaCalendario(2016, 8);

for (var i = 0; i < dias.length; i++) {
	console.log(dias[i]);
}