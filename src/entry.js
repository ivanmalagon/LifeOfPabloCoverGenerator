const initialImages = require('./initialImages');
const renderer = require('./renderer');
const stateManager = require('./stateManager');
const imagesHandling = require('./imagesHandling');

function handleImage(file, imageNumber) {
  imagesHandling.loadImageFromFile(file, imageNumber);
}

function handleFamilyImage(evt) {
  handleImage(evt.target.files[0], 1);
}

function handleBigAssImage(evt) {
  handleImage(evt.target.files[0], 2);
}

function handleLine1(evt) {
  stateManager.setLine1(evt.target.value);
}

function handleLine2(evt) {
  stateManager.setLine2(evt.target.value);
}

function handleFocus1(evt) {
  const target = evt.target;

  if (evt.target.value.toUpperCase() === 'THE LIFE OF PABLO') {
    target.value = '';
  }
}

function handleFocus2(evt) {
  const target = evt.target;

  if (evt.target.value.toUpperCase() === 'WHICH/ONE') {
    target.value = '';
  }
}

function downloadCover(evt) {
  const target = evt.target;
  const cover = renderer.getCover();

  target.href = cover;
}

document.getElementById('image-one')
  .addEventListener('change', handleFamilyImage, false);

document.getElementById('image-two')
  .addEventListener('change', handleBigAssImage, false);

document.getElementById('line1')
  .addEventListener('input', handleLine1, false);

document.getElementById('line2')
  .addEventListener('input', handleLine2, false);

document.getElementById('line1')
  .addEventListener('focus', handleFocus1, false);

document.getElementById('line2')
  .addEventListener('focus', handleFocus2, false);

document.getElementById('download')
  .addEventListener('click', downloadCover, false);

function init() {
  const input1 = document.getElementById('line1');
  const input2 = document.getElementById('line2');
  const state = stateManager.getState();

  input1.value = state.line1;
  input2.value = state.line2;
  imagesHandling.renderImageToState(initialImages.family, 1);
  imagesHandling.renderImageToState(initialImages.bigAss, 2);
}

init();
