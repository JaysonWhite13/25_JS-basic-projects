
const text = document.getElementById('text');

text.addEventListener("keydown", (event) => {
    if(event.key === "Enter")
      textcollector();
  });//here is for it to function when the ENTER button is pressed

function textcollector(){

document.getElementById('here').innerHTML = text.value;
text.value = "";

}


