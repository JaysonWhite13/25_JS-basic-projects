var take = document.getElementById('num').innerHTML;
var num = Number(take);

function increase(){
    var i;
    for(i=0;i<100;i++){
        num =  num + 1;
        return document.getElementById('num').innerHTML = num;
    }

}

function decrease(){
    var i;
    for(i=0;i<100;i++){
        num =  num - 1;
        return document.getElementById('num').innerHTML = num;
    }

}



