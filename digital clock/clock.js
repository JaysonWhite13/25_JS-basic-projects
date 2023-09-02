function searchDate(){
var m = new Date();
var hour =  m.getHours();
var min = m.getMinutes();


if(m.getHours() > 12){
    document.getElementById('secs').innerHTML = "PM";
}else if(m.getHours() < 12){
    document.getElementById('secs').innerHTML = "AM";
}

if(hour < 10){
    hour = "0"+hour
}
if(min < 10){
    min = "0"+min
}


var days  = ["SUN"," MON","TUE","WED","THU","FRI","SAT"]
var i = m.getDay() ;

document.getElementById('min').innerHTML = min;
document.getElementById('hour').innerHTML = hour;
document.getElementById('day').innerHTML = days[i];
setTimeout(searchDate, 200)

}

searchDate();
