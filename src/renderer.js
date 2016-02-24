const stateManager = require('./stateManager');

const coverId = 'cover';

const renderState = () => {
  const canvas = document.getElementById(coverId);
  const ctx = canvas.getContext('2d');
  const state = stateManager.getState();
  let index = 0;
  let dstX;
  let dstY;
  let newW;
  let newH;
  let textSize;
  let textX;
  let textY;
  let i;
  let slices = [];
  let firstHalf;
  let secondHalf;
  let fullLine;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#f98a5f';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Line 1
  textSize = Math.floor(ctx.canvas.height * 0.063);
  ctx.font = `bold ${textSize}px sans-serif`;
  ctx.fillStyle = 'black';
  textX = ctx.canvas.width * 0.149;
  textY = ctx.canvas.height * 0.096;
  slices = state.line1.split(' ');
  if (slices.length >= 4) {
    index = 3;
  } else if (slices.length > 1) {
    index = slices.length - 1;
  }
  if (index > 0) {
    firstHalf = slices.slice(0, index).join(' ');
    secondHalf = slices.slice(index).join(' ');
  } else {
    firstHalf = slices.join(' ');
  }
  for (i = 0; i < 6; i++) {
    if (i === 0 && secondHalf) {
      fullLine = `${firstHalf}        ${secondHalf}`;
    } else if (i > 0 && secondHalf) {
      fullLine = `${firstHalf}     ${secondHalf}`;
    } else {
      fullLine = firstHalf;
    }
    ctx.fillText(fullLine.toUpperCase(), textX, textY + (i * ctx.canvas.height * 0.072));
  }
  if (secondHalf) {
    fullLine = `${firstHalf}      ${secondHalf}`;
  } else {
    fullLine = firstHalf;
  }
  ctx.fillText(fullLine.toUpperCase(), textX, textY + (ctx.canvas.height * 0.53));

  // Line 2
  textSize = Math.floor(ctx.canvas.height * 0.03);
  ctx.font = `bold ${textSize}px sans-serif`;
  textX = ctx.canvas.width * 0.117;
  textY = ctx.canvas.height * 0.66;
  for (i = 0; i < 10; i++) {
    ctx.fillText(state.line2.toUpperCase(), textX, textY + (i * ctx.canvas.height * 0.033));
  }
  textX += (ctx.canvas.width * 0.535);
  for (i = 0; i < 10; i++) {
    ctx.fillText(state.line2.toUpperCase(), textX, textY + (i * ctx.canvas.height * 0.033));
  }

  if (typeof state.image1.image !== 'undefined') {
    dstX = Math.floor(ctx.canvas.width * 0.208);
    dstY = Math.floor(ctx.canvas.height * 0.302);
    newW = Math.floor(ctx.canvas.width * 0.397);
    newH = newW * 2 / 3;

    ctx.drawImage(
      state.image1.image,
      state.image1.dx,
      state.image1.dy,
      state.image1.width,
      state.image1.height,
      dstX,
      dstY,
      newW,
      newH);
  }
  if (typeof state.image2.image !== 'undefined') {
    dstX = Math.floor(ctx.canvas.width * 0.443);
    dstY = Math.floor(ctx.canvas.height * 0.697);
    newW = Math.floor(ctx.canvas.width * 0.270);
    newH = newW;

    ctx.drawImage(
      state.image2.image,
      state.image2.dx,
      state.image2.dy,
      state.image2.width,
      state.image2.height,
      dstX,
      dstY,
      newW,
      newH);
  }
};

stateManager.addSubscriber(renderState);

const getCover = () => {
  const cover = document.getElementById(coverId);

  return cover.toDataURL();
};

module.exports = {
  renderState,
  getCover
};
