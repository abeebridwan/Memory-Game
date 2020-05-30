// all variables used in the app
const deck = document.querySelector(".deck");
const cards = document.querySelectorAll(".deck li");
const arrayCards = Array.from(cards);
const countMoves = document.querySelector(".moves");
const add_s= document.getElementById("add_s");

let stars = document.querySelector(".stars");
let modal = document.getElementById('myModal');
let span = document.getElementsByClassName("close")[0];
let playedTime = document.getElementById('playtime');
let showCount = document.getElementById('movecounter');
let yourstar = document.getElementById('yourstar');
let btncancel = document.getElementById('btncancel');
let restart = document.querySelector(".restart");
let clickedList = [];
let move = 0;
let saveStar = stars.innerHTML;
let clickCounter = 0;
let minutes = 0;
let seconds = 0;
let appendSeconds = document.getElementById("seconds");
let appendminutes = document.getElementById("minutes");
let interval;

//shuffle Cards and display it
function shuffleCard(){
   let shuffleCards = shuffle(arrayCards);
      shuffleCards.forEach(function(item){
        deck.appendChild(item);
      });
};

shuffleCard(); //call  shuffleCard() init

// Shuffle function from
function shuffle(array) {
   var currentIndex = array.length, temporaryValue, randomIndex;

   while (currentIndex !== 0) {
       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex -= 1;
       temporaryValue = array[currentIndex];
       array[currentIndex] = array[randomIndex];
       array[randomIndex] = temporaryValue;
   }
   return array;
};

// Event Listener for all cards............
deck.addEventListener("click", function(evt){
       let cardTarget = evt.target;
       clickCounter++;
  if((cardTarget.classList.contains("card")) && (!cardTarget.classList.contains("match")) && (clickedList.length < 2) && (!clickedList.includes(cardTarget))){
       toggleCard(cardTarget);
       saveCard(cardTarget);
     if(clickedList.length == 2){
       checkMatchCards();
       moves();
     };
   };
   removeStar();
   Addtime(clickCounter);
   allCardMatched();
  });

// Event Listener for restart btn
restart.addEventListener("click", function(){
      reStartAllnow();
  });

// Event Listener for restart btn in the modal
btnreplay.addEventListener("click", function(){
   modal.style.display = "none";
   reStartAllnow();
});

// Event Listener for cancel btn in the modal
btncancel.addEventListener("click", function(){
   modal.style.display = "none";
});

// Event Listener for "x" btn in the modal
span.addEventListener("click", function(){
    modal.style.display = "none";
});

// Event Listener for modal
window.addEventListener("click", function(event){
    if (event.target == modal) {
        modal.style.display = "none";
    };
});

//function toggle class "show" and  "open"
function toggleCard(cardClicked){
   cardClicked.classList.toggle("show");
   cardClicked.classList.toggle("open");
 };

//function save clicked card
function saveCard(cardClicked){
   clickedList.push(cardClicked)
 };

//function ckecks for class "match" from the saved card and also delays card from disappering before matched
function checkMatchCards() {
   if(clickedList[0].firstElementChild.className === clickedList[1].firstElementChild.className){
       clickedList[0].classList.toggle("match");
       clickedList[1].classList.toggle("match");
       clickedList = [];
   }else {
     setTimeout(function() {
       toggleCard(clickedList[0]);
       toggleCard(clickedList[1]);
       clickedList = [];
     },1000);
   };
 };

//function count moves after click and "move" change
function moves(){
   move++;
   if(move == 2){
     add_s.textContent = "Moves";
   };
   countMoves.innerHTML = move;
};

//function removes stars after several clicks
function removeStar(){
 if((move == 9) || (move == 17) || (move == 25) ){
   stars.removeChild(stars.childNodes[0]);
 }else {
   return// do nothing!
 };
};

//function makes a digital clock
function startTimer () {
  seconds++;

  if(seconds < 10){
    appendSeconds.innerHTML = "0" + seconds;
  };

  if (seconds >= 10){
    appendSeconds.innerHTML = seconds;
  };

  if (seconds > 60) {
    minutes++;
    appendminutes.innerHTML = "0" + minutes;
    seconds = 0;
    appendSeconds.innerHTML = "0" + 0;
  };

  if (minutes > 9){
    appendminutes.innerHTML = seconds;
  };

};

//function complete the making of digital clock
function Addtime(clickCount){
 if(clickCount == 1){
   interval = setInterval(startTimer, 1000);
 }else {
   return
 };
};

//function in making for checking matched cards
function checkallMatchedCard(card) {
 return  card.classList.contains("match");
};

//function for displaying modal if all cards matched
function allCardMatched() {
  if (arrayCards.every(checkallMatchedCard) == true){
    modal.style.display = "block";
    clearInterval(interval);
    playedTime.innerHTML = appendminutes.innerHTML + " : " + appendSeconds.innerHTML;
     showCount.innerHTML= countMoves.innerHTML;
     yourstar.innerHTML =  stars.innerHTML;
  };
};

//function resetting everything
function reStartAllnow() {
 arrayCards.forEach(function(card){
   card.classList.remove("open");
   card.classList.remove("show");
   card.classList.remove("match");
 });
   clearInterval(interval);
   appendminutes.innerHTML = "00";
   appendSeconds.innerHTML = "00";
   clickCounter = 0;
   minutes = 0;
   seconds = 0;
   stars.innerHTML = saveStar;
   countMoves.innerHTML = 0 ;
   add_s.textContent = "Move";
   move = 0;
   shuffleCard(); //call  shuffleCard() init again
};
