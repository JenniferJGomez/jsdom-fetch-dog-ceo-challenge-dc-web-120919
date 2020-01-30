document.addEventListener("DOMContentLoaded", () => {
    let fetchDogs = fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => response.json())
        .then(dogs => dogs.message.forEach(dogObj => renderDogs(dogObj)))

})

function renderDogs(dogObject) {

    // building the dog image
   let dogImg = document.createElement("img") 
   dogImg.src = dogObject
   imgContainer().appendChild(dogImg)
    
}

//get elements
function imgContainer(){
    return document.getElementById("dog-image-container")
}