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

// Just Added JS
const continentImages = {
   africa: {
       1: "https://hdwallsource.com/img/2014/7/beautiful-sahara-desert-28978-29694-hd-wallpapers.jpg"
   },
   america: {
      1: "http://www.travelpointkibris.com/wp-content/uploads/2013/05/new_york_city_night_2048x1152_need_desktop_wallpaper-408457.jpg"
  },
   asia: {
       1: "https://i.pinimg.com/originals/50/21/27/502127e404e29ea389194151daf210fa.jpg"
   },
   australia: {
       1: "https://www.genesistravelservices.com/wp-content/uploads/2016/12/australia.jpg"
   },
   europe: {
       1: "https://cdn.hipwallpaper.com/i/36/32/xPo150.jpg"
   },
}

let currentElement;
let prevElement; let nextElement; 
let mainContainer = document.querySelector(".header");

document.querySelector(".scroller__pointers").addEventListener("click", (e) => {
   if(!continentImages[e.target.name]){ return;}
   
   document.querySelectorAll(".pointer__item").forEach( btn => btn.classList.remove("current__pointer--item"));
   e.target.classList.add("current__pointer--item");

   mainContainer.style.backgroundImage = `url(${continentImages[e.target.name][1]})`;

   prevElement = document.getElementById(`${e.target.name}`).previousElementSibling;
   nextElement = document.getElementById(`${e.target.name}`).nextElementSibling;
   currentElement = document.getElementById(`${e.target.name}`);
   
   document.querySelectorAll(".continent").forEach( continent => {
       continent.classList.remove("sideshow", "currentshow");
       continent.style.position = "relative";
       continent.style.top = `-${33 * e.target.rel}%`
   });

   if(prevElement){prevElement.classList.add("sideshow");}
   if(nextElement){nextElement.classList.add("sideshow");}
   currentElement.classList.add("currentshow");

});