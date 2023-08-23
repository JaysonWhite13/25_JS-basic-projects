var i = 0;

function changeColor(){
    colors = ['red','orange','yellow','green','indigo','voilet','cyan','yellowgreen','brown'];

    document.getElementsByTagName('body')[0].style.background = colors[i++];

    if(i > colors.length ){
        i =0;
    }
    document.getElementsByTagName('h1')[0].style.color= "white";
    document.getElementsByTagName('p')[0].style.color= "white";

}