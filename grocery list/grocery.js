var input = document.querySelector('input');
var list =  document.getElementById('here');
var eraser =  document.getElementById('here');


input.addEventListener("keypress", (e)=> {

    if(e.key == "Enter" ){
        addItems();

    }
     
} );
function erase(){
   eraser.innerHTML = "";
}


function addItems(){
    let h2 = document.createElement("h2");
    h2.innerHTML = "-" + input.value;

    h2.addEventListener("click" , () =>{
        h2.style.textDecoration = "line-through"; 
    })
 
   list.insertAdjacentElement( "beforebegin",h2);

   input.value = "";
}
