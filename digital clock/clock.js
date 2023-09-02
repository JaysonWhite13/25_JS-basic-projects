function searchDate(){
var m = new Date();

document.getElementById('hour').innerHTML = m.getHours();
document.getElementById('min').innerHTML = m.getMinutes();

if(m.getHours() > 12){
    document.getElementById('secs').innerHTML = "PM";
}else if(m.getHours() < 12){
    document.getElementById('secs').innerHTML = "AM";
}

var days  = ["SUN"," MON","TUE","WED","THU","FRI","SAT"]
var i = m.getDay() ;

document.getElementById('day').innerHTML = days[i];


setTimeout(searchDate, 200)

}

searchDate();