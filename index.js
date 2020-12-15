const argvLen = process.argv.length;
const playerAction = process.argv[argvLen - 1];

const ROCK = 'rock';
const SCIS = 'scissors';
const PAPER = 'paper';

const randomNum = Math.random() * 3;
let hostAction;
if (randomNum < 1) {
  hostAction = ROCK;
} else if (randomNum > 2) {
  hostAction = PAPER;
} else {
  hostAction = SCIS;
}

if (hostAction === playerAction) {
  console.log('平局');
} else if ((hostAction === ROCK && playerAction === SCIS) || (hostAction === SCIS && playerAction === PAPER) || (hostAction === PAPER && playerAction === ROCK)) {
  console.log('主场win');
} else {
  console.log('客场win');
}