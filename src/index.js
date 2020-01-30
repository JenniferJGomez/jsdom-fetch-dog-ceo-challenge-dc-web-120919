document.addEventListener("DOMContentLoaded", () => {
    let fetchDogs = fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => response.json())
        .then(dogs => dogs.message.forEach(dogObj => renderDogs(dogObj)))

        fetch("https://dog.ceo/api/breeds/list/all")
            .then(response => response.json())
            .then(breeds => fetchBreeds(breeds))


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
    // console.log(breed)
    //build breed list
    // let noComma = breed.forEach(breed => breed.replace(',', ''))
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

//get elements
function imgContainer(){
    return document.getElementById("dog-image-container")
}

function ulContainer(){
    return document.getElementById("dog-breeds")
}

// function renderBreedList(breed){
//     console.log(breed)
//     //build breed list
//     // let noComma = breed.forEach(breed => breed.replace(',', ''))
//     let breedListItem = document.createElement("li")
//     let breedOrderedList = document.createElement("ol")
//     let subBreedListItem = document.createElement("li")
//     debugger
//     // breedListItem.innerText = breed
//     ulContainer().appendChild(breedListItem)
//     breedListItem.appendChild(breedOrderedList)
//     breedOrderedList.appendChild(subBreedListItem)

//     while (breed[1].length > 0) {
//         breedListItem.innerText = breed[0]
//         subBreedListItem.innerText = breed[1]
//         break
//       }
//     breedListItem.innerText = breed[0]
// }