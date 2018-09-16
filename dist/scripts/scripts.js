'use strict';

// let calender = () => {
//     let lastDay = (year, month) => {
//         return new Date(year, month, 0).getDate();
//     }
//     let firstDay = (year, month) => {
//         return new Date(year, month - 1, 1).getDay();
//     }

//     let daysOfTheWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
//     let calenderHead = document.getElementById('calendar-head');

//     let populateCalendarHead = () => {
//         for (let i=0; i < daysOfTheWeek.length; i++) {
//             let day = document.createElement('p');
//             day.innerHTML = daysOfTheWeek[i];
//             calenderHead.appendChild(day);
//         }
//     }
//     populateCalendarHead();

//     let calendarBody = document.getElementById('calendar-body');
//     let populateCalendarBody = () => {
//         let daysInRow = 7;
//         let totalRows = 5;
//         //let totalDays = daysInRow + totalRows;

//         let currentRows = 0;

//         while (currentRows < totalRows) {
//             let calendarRow = document.getElement('div');
//             for (let i =0; i < daysOfTheWeek.length; i++) {
//                 let day = i;
//                 calendarRow.appendChild(day);
//             }
//             calendarBody
//             .appendChild(calendarRow)
//             .className = 'calendar-row';
//             currentRows++;
//         }
//     }
//     populateCalendarBody();
// };

// document.addEventListener('DOMContentLoaded', calender, false);


var calendar = function calendar() {
  var lastDay = function lastDay(year, month) {
    return new Date(year, month, 0).getDate();
  };
  var firstDay = function firstDay(year, month) {
    return new Date(year, month - 1, 1).getDay();
  };

  var daysOfTheWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  var calendarHead = document.getElementById('calendar-head');
  var populateCalendarHead = function populateCalendarHead() {
    for (var i = 0; i < daysOfTheWeek.length; i++) {
      var day = document.createElement('p');
      day.innerHTML = daysOfTheWeek[i];
      calendarHead.appendChild(day);
    }
  };
  populateCalendarHead();

  var calendarBody = document.getElementById('calendar-body');
  var populateCalendarBody = function populateCalendarBody() {
    var daysInRow = 7;
    var totalRows = 5;
    // var totalDays = daysInRow * totalRows;
    var currentRows = 0;

    while (currentRows < totalRows) {
      var calendarRow = document.createElement('div');
      for (var i = 0; i < daysInRow; i++) {
        console.log('within for loop');
        var day = document.createElement('p');
        day.innerHTML = i;
        calendarRow.appendChild(day);
      }
      calendarBody.appendChild(calendarRow).className = "calendar-row";
      currentRows++;
    }
  };
  populateCalendarBody();
};

document.addEventListener('DOMContentLoaded', calendar, false);
'use strict';

var fn = function fn() {
	// adding p tag for minus
	var minus = document.getElementsByClassName('minus');

	for (var i = 0; i < minus.length; i++) {
		var e = document.createElement('p');
		e.innerHTML = '-';
		minus[i].appendChild(e);
	}

	//adding p tag for plus
	var plus = document.getElementsByClassName('plus');
	for (var i = 0; i < plus.length; i++) {
		var e = document.createElement('p');
		e.innerHTML = '+';
		plus[i].appendChild(e);
	}
};

document.addEventListener('DOMContentLoaded', fn, false);
'use strict';

var list = [];
var myFunkyFunk = function myFunkyFunk() {
  console.log('the funk');
};