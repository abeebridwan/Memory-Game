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
