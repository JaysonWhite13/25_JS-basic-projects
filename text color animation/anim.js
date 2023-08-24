function changeColor(){

    var hex_numbers = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];//creating an array of 15 values
    var l = hex_numbers.length;
    var hex_color = "";

    for( var i = 0;i < 6;i++){//6 becausea a color code is made up of 6 values
        var random_num = Math.floor(Math.random() * l);//generating a random num from the array above
        hex_color += hex_numbers[random_num];

    }
    document.getElementsByTagName('body')[0].style.background = '#' + hex_color;//# because it's part of the color code e.g:#00000
    document.getElementById('hex-code').innerHTML = hex_color;


}

