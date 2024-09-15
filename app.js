document.addEventListener("DOMContentLoaded", () =>{

const images = document.querySelectorAll("img");

for (const image of images){
    fetch("https://api.api-ninjas.com/v1/cats")
    .then(response => response.json())
    .then(data => image.src = data.message)
}

})