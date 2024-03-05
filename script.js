let checkBox = document.querySelector("#toggle");

let monthly = document.querySelectorAll(".monthly");
let yearly = document.querySelectorAll(".annually");

checkBox.addEventListener("change", function() {
    if(checkBox.checked) {
        yearly.forEach(price => price.style.display = "none");
        monthly.forEach(price => price.style.display = "block");
    } else {
        yearly.forEach(price => price.style.display = "block");
        monthly.forEach(price => price.style.display = "none");
    }
})