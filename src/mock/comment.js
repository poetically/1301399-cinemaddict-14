import {COMMENT_COUNT, COMMENT_COUNT_PER_FILM, TEXT} from '../const.js';
import {getRandomInteger, humanizeCommentDate} from '../utils.js';

const phrases = TEXT.match( /[^.!?]+[.!?]+/g ).map((phrase) => phrase.trim());
const EMOTIONS = ['smile', 'puke', 'sleeping', 'angry'];
const USER_NAMES = ['Ivan', 'Joe Smith', 'Cathy', 'Trésor', 'Lukian Lukianovich', 'Félicien', 'Anna-Emma'];


const getUserName = () => {
  return USER_NAMES[getRandomInteger(0, USER_NAMES.length - 1)];
};

const getMessage = () => {
  return phrases[getRandomInteger(0, phrases.length - 1)];
};

const getEmotion = () => {
  return EMOTIONS[getRandomInteger(0, EMOTIONS.length - 1)];
};

const getCommentDate = () => {
  return humanizeCommentDate(`${getRandomInteger(2012, 2020)}/${getRandomInteger(1, 12)}/${getRandomInteger(1, 30)} ${getRandomInteger(1, 23)}:${getRandomInteger(0, 59)}`);
};

export const generateCommentIndexes = () => {
  const commentCount = getRandomInteger(0, COMMENT_COUNT_PER_FILM);
  return Array.from({length: commentCount}, () => getRandomInteger(0, COMMENT_COUNT - 1));
};


const generateComment = () => {
  return {
    id: null,
    emotion: getEmotion(),
    date: getCommentDate(),
    userName: getUserName(),
    message: getMessage(),
  };
};

export const allComments = new Array(COMMENT_COUNT).fill().map(generateComment);
allComments.map((comment) => comment.id = allComments.indexOf(comment));
