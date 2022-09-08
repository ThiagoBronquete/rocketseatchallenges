const coffeButton = document.querySelector(".get-coffe-button");

const warningButton = document.querySelector(".button-click");

const closeWarning = document.querySelector("#close-warning")

coffeButton.onclick = function(){
    warningButton.classList.add("warning")
}

closeWarning.onclick = function(){
    warningButton.classList.remove("warning")
}

// coffeButton.addEventListener("click", message)

// function message(){
//     warningButton.classList.remove("hidden")
// }
