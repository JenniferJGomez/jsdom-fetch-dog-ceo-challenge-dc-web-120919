document.addEventListener("DOMContentLoaded", () => {
    let fetchDogs = fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => response.json())
        .then(dogs => dogs.message.forEach(dogObj => renderDogs(dogObj)))

        let fetchBreeds = fetch("https://dog.ceo/api/breeds/list/all")
            .then(response => response.json())
            .then(breeds => (Object.keys(breeds.message).forEach(breed => renderBreedList(breed))))


})

function renderDogs(dogObject) {

    // building the dog image
   let dogImg = document.createElement("img") 
   dogImg.src = dogObject
   imgContainer().appendChild(dogImg)
    
}

function renderBreedList(breed){
    //build breed list
    let breedListItem = document.createElement("li")
    breedListItem.innerText = breed
    ulContainer().appendChild(breedListItem)
}

//get elements
function imgContainer(){
    return document.getElementById("dog-image-container")
}

function ulContainer(){
    return document.getElementById("dog-breeds")
}