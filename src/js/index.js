import { Virus } from './virus';
import { getRandomNumber } from './utils';
import { levels } from './constants/levels';
import { virusDimension } from './constants/constant';
import '../styles/drawingBoard.scss';

let currentLevel = 1;
let currentLevelConfig = levels[currentLevel];

let totalScore = -1;

const canvas = document.getElementById('gameCanvas');

const ctx = canvas.getContext("2d");

// Canvas Width
const W = canvas.width;

// Canvas Height
const H = canvas.height; 

// Canvas boundary position from left
const canvasLeft = canvas.offsetLeft;

// Canvas boundary position from top
const canvasTop = canvas.offsetTop;

let activeViruses = [];

window.addEventListener('DOMContentLoaded', function(){
    initializeGame();
    updateScore();
    updateGameLevelDisplay();
});


/**
 * Initializes the game
 * @method initializeGame
 */
function initializeGame() {
    setup();
    addSanitizerSprayEvent();
}

function updateScore() {
    totalScore = totalScore + 1;
    const el = document.querySelector('.score-value');
    el.textContent = totalScore;
}

function updateGameLevelDisplay() {
    const el = document.querySelector('.level-value');
    el.textContent = currentLevel;
}

/**
 * Update the game level and initialize the game setup
 * @method updateGameLevel
 */
function updateGameLevel() {
    if(Object.keys(levels).length >=  currentLevel + 1) {
        currentLevel = currentLevel + 1;
        currentLevelConfig = levels[currentLevel];
        updateGameLevelDisplay();
        initializeGame();
    }
}

/**
 * Draw the corona viruses on drawing board
 * @method setup
 */
function setup() {
    for(let i=0; i< currentLevelConfig.viruses; i++) {
        const xPos = getRandomNumber(2 * virusDimension, W - 2 * virusDimension);
        const yPos = getRandomNumber(2 * virusDimension, H - 2 * virusDimension);
        const velocityY = getRandomNumber(1, currentLevelConfig.speed.maxVx);
        const velocityX = getRandomNumber(1, currentLevelConfig.speed.maxVy);

        activeViruses.push(new Virus(xPos, yPos, velocityY, velocityX));
    }
}

/**
 * Add click event listener to drawing board to detect if sanitizer spray
 * @method addSanitizerSprayEvent
 */
function addSanitizerSprayEvent() {
    canvas.addEventListener('click', function(event) {
        const X = event.pageX - canvasLeft;
        const Y = event.pageY-canvasTop;

        activeViruses.forEach((virus, index) => {
            if(isKilledBySanitizer(X, Y, virus.xPos, virus.yPos)) {
                activeViruses.splice(index, 1);
                updateScore();
            }
        });

        if(activeViruses.length === 0) {
            updateGameLevel();
        }
    
    });
}

/**
 * Detect if sanitizer has hit the virus
 * 
 * @method isKilledBySanitizer
 * @param {Number} Xcord 
 * @param {Number} Ycord 
 * @param {Number} virusX 
 * @param {Number} virusY 
 * 
 */
function isKilledBySanitizer(Xcord, Ycord, virusX, virusY) {
    if(Xcord >= virusX && Xcord <=  virusX + virusDimension && Ycord >= virusY && Ycord<= virusY + virusDimension) {
        return true;
    }
    return false;
}

/**
 * Clear drawing board
 * @method clearDrawingBoard
 */
function clearDrawingBoard() {
    ctx.clearRect(0, 0, W, H);
}

(function drawScene() {
    clearDrawingBoard();

    activeViruses.forEach(virus => {
        virus.drawVirus(ctx);
        virus.updatePosition(W, H);
    });

    requestAnimationFrame(drawScene);
})();