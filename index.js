
setInterval(showtime,1000);

function showtime() {
    let a= new Date();
    let date = a.toLocaleDateString();
    let hours= a.getHours();
    let minutes= a.getMinutes();
    let seconds = a. getSeconds();
    let am_pm = "AM";
    if(hours>12){
        hours= hours-12;
        am_pm = "PM";
        hours=(hours<10)?"0"+hours:hours;
        minutes=(minutes<10)?"0"+minutes:minutes;
        seconds=(seconds<10)?"0"+seconds:seconds;
 }
 let currentTime= hours +" : "+ minutes+" : "+ seconds;
 document.getElementById('time').innerHTML= currentTime+" on "+ date;
}
showtime();
