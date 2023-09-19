const amnt = document.getElementById('amount');
const guests = document.getElementById('guests');
const quality = document.getElementById('quality');
const dis = document.getElementById('dis')
var ans, forEach;

function tips(){
    ans = Number(amnt.value) * Number(quality.value);
    forEach = ans/Number(guests.value);

    if(String(forEach) === "NaN"){
        document.getElementById('appear').innerHTML = "Tip $0 each";
    }else{
        document.getElementById('appear').innerHTML = "Tip $"+forEach.toFixed(2)+ " each";
    }

    amnt.value = "";
    quality.value = "";
    guests.value = "";
    
}
