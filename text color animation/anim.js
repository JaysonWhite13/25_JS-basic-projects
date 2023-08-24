
function changeColor(){
    var hex_numbers = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

    document.getElementsByTagName('body')[0].style.background = colors[i++];

    if(i > colors.length ){
        i =0;
    }
    document.getElementsByTagName('h1')[0].style.color= "white";
    document.getElementsByTagName('p')[0].style.color= "white";

}
