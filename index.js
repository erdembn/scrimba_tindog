import dogsData from "./data.js";
import Dog from "./Dog.js";

let dogsArray = dogsData.map(dog => new Dog(dog))
let dog = new Dog(dogsArray.shift())

const dogContainer = document.getElementById("dog-container")

dogContainer.innerHTML = dog.getDogHtml()

document.getElementById("like-button").addEventListener("click", () => {
    dog.hasBeenLiked = true
    dog.hasBeenSwiped = true
    if (dog.hasBeenLiked) {
        document.getElementsByClassName("dog")[0].innerHTML += `<div class= "badge-container">
        <img class="badge" src="images/badge-like.png" >
        </div>`
        if (dogsArray.length > 0) {
            setTimeout(() => {
                dog = new Dog(dogsArray.shift())
                dogContainer.innerHTML = dog.getDogHtml()
            }, 1500);
        } else {
            endMessage()
        }
    }

})

document.getElementById("dislike-button").addEventListener("click", () => {
    dog.hasBeenSwiped = true
    if (dog.hasBeenSwiped) {
        document.getElementsByClassName("dog")[0].innerHTML += `<div class= "badge-container">
        <img class="badge" src="images/badge-nope.png" >
        </div>`
        if (dogsArray.length > 0) {
            setTimeout(() => {
                dog = new Dog(dogsArray.shift())
                dogContainer.innerHTML = dog.getDogHtml()
            }, 1500);
        } else {
            endMessage()
        }
    }
})


function endMessage() {
    setTimeout(() => {
        dogContainer.innerHTML = `<div class="no-more-dogs">
        <h2>No more dogs!</h2>
        <p>😔</p> 
        <h3>Try the dog park maybe?</h3>
        </div>`
        document.getElementsByClassName("button-container")[0].innerHTML = ""
    }, 1500);
}