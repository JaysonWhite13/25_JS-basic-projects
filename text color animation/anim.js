

function changeColor(){

    var hex_numbers = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    var l = hex_numbers.length;
    var hex_color = "";

    for( var i = 0;i < 6;i++){
        var random_num = Math.floor(Math.random() * l);
        hex_color += hex_numbers[random_num];

    }
    document.getElementsByTagName('body')[0].style.background = '#' + hex_color;
    document.getElementById('hex-code').innerHTML = hex_color;


}

