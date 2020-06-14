// Select All Cards
const cardBox = document.querySelector('.header__cards--box');
const cards = document.querySelectorAll('.card');
const cardOne = document.querySelector(".card--one");
const cardTwo = document.querySelector(".card--one--back");
const cardFour = document.querySelector(".card--one--front");
const cardThree = document.querySelector(".card--three");

cardOne.addEventListener('click', letSee);
// cardTwo.addEventListener('click', letSee);

//select background image
const bgImage = document.querySelector('.background--image');


function letSee(e){
   cardOne.classList.add('zoom');
   // cardTwo.classList.add("class--one");
   cardTwo.style.height ="100vh";
   cardFour.style.height= "100vh";

   console.log(cardTwo.classList)
   console.log('goof');
}
