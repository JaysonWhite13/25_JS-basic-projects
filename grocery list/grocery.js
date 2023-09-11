var input = document.getElementById('input').value;

input.addEventListener("keypress", function(event) {
    if (event.key === "space") {
      event.preventDefault();
      document.getElementById("myBtn").click();
    }

});