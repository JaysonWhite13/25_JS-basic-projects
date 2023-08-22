
let i = 0;

function changeColor(){
  const arr = ['blue','yellow','red','orange','brown','green','pink','cyan','black',];
  let l = arr.length
  
  document.getElementsByTagName('div')[0].style.background = arr[i++];

  if(i > l){
    i = 0;
  }

 }



 
 
