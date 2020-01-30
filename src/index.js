document.addEventListener("DOMContentLoaded", () => {
    let fetchDogs = fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => response.json())
        .then(dogs => dogs.message.forEach(dogObj => renderDogs(dogObj)))

        fetch("https://dog.ceo/api/breeds/list/all")
            .then(response => response.json())
            .then(breeds => fetchBreeds(breeds))

        ulFinder = document.getElementById("dog-breeds")
        ulFinder.addEventListener('click', handleClick)

})

//fetch functions

function fetchBreeds(breeds){
    
    Object.entries(breeds.message).forEach(breedObj => renderBreedList(breedObj))

}



function renderDogs(dogObject) {

    // building the dog image
   let dogImg = document.createElement("img") 
   dogImg.src = dogObject
   imgContainer().appendChild(dogImg)
    
}

function renderBreedList(breed){
    let breedListItem = document.createElement("li")
    
    
    ulContainer().appendChild(breedListItem)
    
    let flattenedArray = breed.flat()
    breedListItem.innerText = breed[0]
    // debugger
    for (let i = 1; i < flattenedArray.length; i++){
        let breedOrderedList = document.createElement("ul")
        let subBreedListItem = document.createElement("li")
        subBreedListItem.innerText = flattenedArray[i]
        breedOrderedList.appendChild(subBreedListItem)
        breedListItem.appendChild(breedOrderedList)
    }
    
}

function handleClick(e) {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    let textColor = "rgb(" + a + ", " + b + ", " + c + ")";
    targetItem = e.target 
    targetItem.style.color = textColor
}

//get elements
function imgContainer(){
    return document.getElementById("dog-image-container")
}

function ulContainer(){
    return document.getElementById("dog-breeds")
}



