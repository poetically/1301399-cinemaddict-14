import {TEXT, EMOTIONS, COMMENT_COUNT} from '../const.js';
import {getRandomInteger} from '../utils/common.js';
import {humanizeCommentDate} from '../utils/date-format.js';

const USER_NAMES = ['Ivan', 'Joe Smith', 'Cathy', 'Trésor', 'Lukian Lukianovich', 'Félicien', 'Anna-Emma'];
const phrases = TEXT.match( /[^.!?]+[.!?]+/g ).map((phrase) => phrase.trim());


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

const generateComment = (index) => {
  return {
    id: index,
    emotion: getEmotion(),
    date: getCommentDate(),
    userName: getUserName(),
    message: getMessage(),
  };
};

export const allComments = new Array(COMMENT_COUNT).fill().map((item, index) => generateComment(index));
