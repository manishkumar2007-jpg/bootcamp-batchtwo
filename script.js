let button = document.getElementById("btn");
let title = document.getElementById("title");

button.addEventListener("click", function () {
    title.textContent = "You Clicked the Button!";
    document.body.style.backgroundColor = "lightblue";
});