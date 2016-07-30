/* Data for the schedule. This will reflect the actual schedule on the main
** website. This will allow us to make schedule changes easily in case we need to.
** Each item will follow this design pattern.
** {
**   "name": "{name of the event}",
**   "start": "{start time of the event in standard local time format}"
**   "end": "{end time of the event in standard local time format}"
** }
** A new date could be created using `new Date(year, month, day, hours, minutes)`
*/
var schedule = [
    {
        name: "Registration",
        start: new Date(2016, 9, 15, 11, 0),
        end: new Date(2016, 9, 15, 14, 0)
    },
    {
        name: "Pizza Lunch",
        start: new Date(2016, 9, 15, 11, 0),
        end: new Date(2016, 9, 15, 12, 30)
    },
    {
        name: "Welcome",
        start: new Date(2016, 9, 15, 14, 0),
        end: new Date(2016, 9, 15, 14, 30)
    },
    {
        name: "Team Formation",
        start: new Date(2016, 9, 15, 14, 30),
        end: new Date(2016, 9, 15, 15, 0)
    },
    {
        name: "Start Hacking!",
        start: new Date(2016, 9, 15, 15, 0),
    },
    {
        name: "Dinner",
        start: new Date(2016, 9, 15, 18, 0),
        end: new Date(2016, 9, 16, 19, 0)
    },
    {
        name: "Workshops",
        start: new Date(2016, 9, 15, 17, 0),
        end: new Date(2016, 9, 16, 22, 30)
    },
    {
        name: "Activites",
        start: new Date(2016, 9, 15, 22, 30),
        end: new Date(2016, 9, 16, 0, 0)
    },
    {
        name: "Food Truck",
        start: new Date(2016, 9, 16, 0, 0),
        end: new Date(2016, 9, 16, 0, 30)
    },
    {
        name: "Breakfast",
        start: new Date(2016, 9, 16, 7, 0),
        end: new Date(2016, 9, 16, 8, 30)
    },
    {
        name: "Activites",
        start: new Date(2016, 9, 16, 9, 0),
        end: new Date(2016, 9, 16, 10, 30)
    },
    {
        name: "Lunch",
        start: new Date(2016, 9, 16, 11, 30),
        end: new Date(2016, 9, 16, 12, 30)
    },
    {
        name: "Submit Projects",
        end: new Date(2016, 9, 16, 14, 0)
    },
    {
        name: "Sponsor Judging",
        start: new Date(2016, 9, 16, 14, 15),
        end: new Date(2016, 9, 16, 15, 45)
    },
    {
        name: "Presentations + Prizes",
        start: new Date(2016, 9, 16, 17, 0),
        end: new Date(2016, 9, 16, 22, 30)
    }
]