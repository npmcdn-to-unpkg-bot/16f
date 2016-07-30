/* Data for the schedule. This will reflect the actual schedule on the main
** website. This will allow us to make schedule changes easily in case we need to.
** Each item will follow this design pattern.
** {
**   "id": {order of precedence} 
**   "name": "{name of the event}",
**   "start": "{start time of the event in standard local time format}"
**   "end": "{end time of the event in standard local time format}"
** }
** A new date could be created using `new Date(year, month, day, hours, minutes)`
*/
var schedule = [
    {
        id: 1,
        name: "Registration",
        start: new Date(2016, 9, 15, 11, 0),
        end: new Date(2016, 9, 15, 14, 0)
    },
    {
        id: 2,
        name: "Welcome",
        start: new Date(2016, 9, 15, 14, 0),
        end: new Date(2016, 9, 15, 14, 30)
    },
    {
        id: 3,
        name: "Pizza Lunch",
        start: new Date(2016, 9, 15, 11, 0),
        end: new Date(2016, 9, 15, 12, 30)
    },
    {
        id: 4,
        name: "Team Formation",
        start: new Date(2016, 9, 15, 14, 30),
        end: new Date(2016, 9, 15, 15, 0)
    },
    {
        id: 5,
        name: "Start Hacking!",
        start: new Date(2016, 9, 15, 15, 0),
    },
    {
        id: 6,
        name: "Dinner",
        start: new Date(2016, 9, 15, 18, 0),
        end: new Date(2016, 9, 16, 19, 0)
    },
    {
        id: 7,
        name: "Workshops",
        start: new Date(2016, 9, 15, 17, 0),
        end: new Date(2016, 9, 16, 22, 30)
    },
    {
        id: 8,
        name: "Activites",
        start: new Date(2016, 9, 15, 22, 30),
        end: new Date(2016, 9, 16, 0, 0)
    },
    {
        id: 9,
        name: "Food Truck",
        start: new Date(2016, 9, 16, 0, 0),
        end: new Date(2016, 9, 16, 0, 30)
    },
    {
        id: 10,
        name: "Breakfast",
        start: new Date(2016, 9, 16, 7, 0),
        end: new Date(2016, 9, 16, 8, 30)
    },
    {
        id: 11,
        name: "Activites",
        start: new Date(2016, 9, 16, 9, 0),
        end: new Date(2016, 9, 16, 10, 30)
    },
    {
        id: 12,
        name: "Lunch",
        start: new Date(2016, 9, 16, 11, 30),
        end: new Date(2016, 9, 16, 12, 30)
    },
    {
        id: 13,
        name: "Submit Projects",
        end: new Date(2016, 9, 16, 14, 0)
    },
    {
        id: 14,
        name: "Sponsor Judging",
        start: new Date(2016, 9, 16, 14, 15),
        end: new Date(2016, 9, 16, 15, 45)
    },
    {
        id: 15,
        name: "Presentations + Prizes",
        start: new Date(2016, 9, 16, 17, 0),
        end: new Date(2016, 9, 16, 22, 30)
    }
]

/* This is essentially the metadata describing the attributes of the timeline
** TODO: these are random values.
*/
var config = {
    colors : {
        time: 'pink',
        line: 'black',
        point: 'black',
        text: 'black'
    },
    fontSize: '16px',
    fontFamily: 'Helvetica',
    textPadding: '5px',
    cellHeight: '40px'
}

/* This function filters the data and returns an ordered list of events on that date
** date is the date of the month. Eg. 15th will be 15
*/
function getSortedData(date) {
    return schedule.filter(function (d) {
        return d.start ? d.start.getDate() == date : d.end.getDate() == date;
    }).sort(function (a, b) {
        return a.id > b.id;
    });
}

// processes the data to look the way we want it to
function processData(data) {
    return data.map(function (d) {
        var period = '{empty}';
        if (d.start && d.end) {
            period = timeToAMPM(d.start) + '-' + timeToAMPM(d.end); 
        } else {
            period = timeToAMPM(d.start ? d.start : d.end);
        }
        return {
            period: period,
            text: d.name
        }
    });
}

// Converts a date to time in AM/PM text
function timeToAMPM(d) {
    var hh = ((d.getHours() + 11) % 12 + 1);
    var mm = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
    var ampm = d.getHours() < 12 ? 'am' : 'pm';
    return hh + ':' + mm + ampm;
}

console.log(processData(getSortedData(15)));