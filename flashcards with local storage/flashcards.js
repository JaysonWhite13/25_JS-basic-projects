const quest = document.getElementById('questions');
const ans = document.getElementById('answers');
const appear = document.getElementById('appear');
const createbox = document.getElementsByClassName("creates")[0];

let contentArray = localStorage.getItem('items') ?
 JSON.parse(localStorage.getItem('items')) : [];

contentArray.forEach(divMaker);

function divMaker(text){
   var div = document.createElement("div");
   var h2_question = document.createElement("h2");
   var h2_answer = document.createElement("h2");

   div.className ='flashcard';

   h2_question.setAttribute('style', "padding:15px; margin-top:30px; border-top:1px solid red;");
   h2_question.innerHTML =text.my_question;

   h2_answer.setAttribute('style',"text_align:center; diplay:none; color:red;");
   h2_answer.innerHTML =text.my_answer;

   div.appendChild(h2_question)
   div.appendChild(h2_answer)

   div.addEventListener("click",function(){
      if(h2_answer.style.display == "none")
         h2_answer.style.display = "block";
      else
         h2_answer.style.display = "none";
   });

   appear.appendChild(div);

}

 function saveflashcards(){
    var user_info = {
        "my_question": quest.value,
        "my_answer":ans.value
    }

    contentArray.push(user_info);
    localStorage.setItem('items', JSON.stringify(contentArray));
    divMaker(contentArray[contentArray.length - 1]);
    quest.value = '';
    ans.value = '';

 }


 function delflashcards(){
    localStorage.clear();
    flashcards.innerHTML = '';
    contentArray = [];
 }

 function showtab(){
    createbox.style.display = "block"
 }

 function closetab(){
    createbox.style.display = "none";
 }




