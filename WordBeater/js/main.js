window.addEventListener('load',init);


//Available levels
const levels = {
    easy:5,
    medium:3,
    hard:2
}

//to change level
const currentLevel =levels.easy;


//Globals
let time = currentLevel;
let score = 0;
let isPlaying;


//DOM Elements

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
  ];

//Initialize Game

function init(){

//show number of seconds in UI
seconds.innerHTML = currentLevel;


//Load word from Array
showWord(words);

//start matching on word input
wordInput.addEventListener('input', startMatch);

//call countdown every seconds
setInterval(countdown,1000);

//check game status
setInterval(checkStatus);

}

//Start match

function startMatch(){
    if(matchWords()){
        isPlaying = true;
        time = currentLevel+1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
        
   //if score is -1, display 0

   if(score===-1){

    scoreDisplay.innerHTML = 0;
   } else {

    scoreDisplay.innerHTML = score; 
}
}

//Match current word to WordInput
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct!';
        return true;
}else{
    message.innerHTML = ''
    return false;
}
}

//Pick and random word

function showWord(words){
    //Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    //Output random word
    currentWord.innerHTML = words[randIndex];

}


//Countdown timer

function countdown(){
    //Make sure time is not run out
if(time>0){
//Decrement
time--;
}else if(time===0){
//Game is over
isPlaying = false;
}
//show time
timeDisplay.innerHTML = time;

} 

//check game status

function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Booooo.... :-( Game Over!';
        score = -1;
        
    }
}











