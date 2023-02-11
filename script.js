// all h2 headding style

const headdingsTwo = document.getElementsByClassName("headding-two");
for (const headdingTwo of headdingsTwo) {
  headdingTwo.style.color = "lightblue";
}

// shoes section

const backPack = document.getElementById("backpack");
backPack.style.backgroundColor = "tomato";
backPack.style.borderRadius = "8px";

// card

const cards = document.getElementsByClassName("card");
for (const card of cards) {
  card.style.borderRadius = "30px";
}

// apply to addevent listener a button with function

// document.getElementById("submit-btn").addEventListener("click", function () {
//   console.log("hello submit btn");
// });

// remove card, if click buy now button clicked

// wrong system using class

/*
const removeBtn = document.getElementsByClassName("remove-btn");
for (const btn of removeBtn) {
  const getRemoveOne = btn.addEventListener("click", removes);
}

function removes() {
  const removeCards = document.getElementsByClassName("remove-card");
  for (const card of removeCards) {
    card.remove();
  }
}
*/

// remove card, if click buy now button clicked

// Right system using ID

// card: 01

document.getElementById("remove-btn-one").addEventListener("click", removeOne);

function removeOne() {
  const removeCardsOne = document.getElementById("remove-card-one");
  removeCardsOne.remove();
}

// card: 02

document.getElementById("remove-btn-two").addEventListener("click", removeTwo);

function removeTwo() {
  const removeCardsTwo = document.getElementById("remove-card-two");
  removeCardsTwo.remove();
}

// card: 03

document
  .getElementById("remove-btn-three")
  .addEventListener("click", removeThree);

function removeThree() {
  const removeCardsThree = document.getElementById("remove-card-three");
  removeCardsThree.remove();
}

// card: 04

document
  .getElementById("remove-btn-four")
  .addEventListener("click", removeFour);

function removeFour() {
  const removeCardsFour = document.getElementById("remove-card-four");
  removeCardsFour.remove();
}

// card: 05

document
  .getElementById("remove-btn-five")
  .addEventListener("click", removeFive);

function removeFive() {
  const removeCardsFive = document.getElementById("remove-card-five");
  removeCardsFive.remove();
}

// card: 06

document.getElementById("remove-btn-six").addEventListener("click", removeSix);

function removeSix() {
  const removeCardsSix = document.getElementById("remove-card-six");
  removeCardsSix.remove();
}

// Enable submit button

document
  .getElementById("input-delete")
  .addEventListener("keyup", function (event) {
    const text = event.target.value;
    const btnDelete = document.getElementById("btn-delete");
    if (text === "email") {
      btnDelete.removeAttribute("disabled");
    } else {
      btnDelete.setAttribute("disabled", true);
    }
  });

  
// Change image, if mouse enter the image

const img = document.getElementById("change-img");

img.addEventListener("mouseenter", function () {
  img.src = "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=400";
});

img.addEventListener("mouseleave", function () {
  img.src = "images/bags/bag-3.png";
});


// if you double click contact section than change the bg-color 

const changeBackground = document.getElementById ('contact-section');

changeBackground.addEventListener ('dblclick', function () {
    changeBackground.style.backgroundColor = "navy";
    changeBackground.style.color = "white";
})