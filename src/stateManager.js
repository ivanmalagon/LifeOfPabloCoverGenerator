const state = {
  line1: 'The life of Pablo',
  line2: 'Which/One',
  image1: {},
  image2: {}
};
const subscribers = [];

const addSubscriber = (subscriber) => {
  if (typeof subscriber === 'function') {
    subscribers.push(subscriber);
  }
};

function callSubscribers() {
  subscribers.forEach((subscriber) => {
    subscriber();
  });
}

const setLine1 = (text) => {
  state.line1 = text;
  callSubscribers();
};

const setLine2 = (text) => {
  state.line2 = text;
  callSubscribers();
};

const setImage1 = (image) => {
  state.image1 = image;
  callSubscribers();
};

const setImage2 = (image) => {
  state.image2 = image;
  callSubscribers();
};

const getState = () => state;

module.exports = {
  addSubscriber,
  setLine1,
  setLine2,
  setImage1,
  setImage2,
  getState
};
