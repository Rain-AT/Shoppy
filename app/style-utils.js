// Create transition and prefix for all browsers
// HOW TO USE: ${ transition('all', '0.5s', 'ease-out-back') }
export function transition(target, time, easing, delay = '') {
  const easingFunc = (easing === 'ease-out-back') ? 'cubic-bezier(0.175, 0.885, 0.320, 1.275)' : easing;

  return `
    transition: ${target} ${time} ${easingFunc} ${delay};
    -moz-transition: ${target} ${time} ${easingFunc} ${delay};
    -webkit-transition: ${target} ${time} ${easingFunc} ${delay};
  `;
}

// To make a line overflow with an ellipsis (…) when the text is longer than the container element is wide
// HOW TO USE: ${ truncate('250px') }
export function truncate(width) {
  return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
}

// Create a gradient background
// HOW TO USE: ${ gradientBg() }
export function gradientBg() {
  return `
    background: rgba(234,245,251,1);
    background: -moz-linear-gradient(top, rgba(234,245,251,1) 0%, rgba(234,245,251,1) 18%, rgba(238,240,252,1) 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(234,245,251,1)), color-stop(18%, rgba(234,245,251,1)), color-stop(100%, rgba(238,240,252,1)));
    background: -webkit-linear-gradient(top, rgba(234,245,251,1) 0%, rgba(234,245,251,1) 18%, rgba(238,240,252,1) 100%);
    background: -o-linear-gradient(top, rgba(234,245,251,1) 0%, rgba(234,245,251,1) 18%, rgba(238,240,252,1) 100%);
    background: -ms-linear-gradient(top, rgba(234,245,251,1) 0%, rgba(234,245,251,1) 18%, rgba(238,240,252,1) 100%);
    background: linear-gradient(to bottom, rgba(234,245,251,1) 0%, rgba(234,245,251,1) 18%, rgba(238,240,252,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#eaf5fb', endColorstr='#eef0fc', GradientType=0 );
  `;
}

// To make a gradient line from black to opacity black with the provided width and height
// HOW TO USE: ${ gradientLine('20px', '1px') }
export function gradientLine(width, height) {
  return `
    width: ${width};
    height: ${height};
    background: rgba(0,0,0,1);
    background: -moz-linear-gradient(left, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
    background: -webkit-gradient(left top, right top, color-stop(0%, rgba(0,0,0,1)), color-stop(70%, rgba(0,0,0,1)), color-stop(100%, rgba(0,0,0,0)));
    background: -webkit-linear-gradient(left, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
    background: -o-linear-gradient(left, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
    background: -ms-linear-gradient(left, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
    background: linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#000000', GradientType=1 );
  `;
}

// To make a gradient line from black to opacity black with the provided width and height
// HOW TO USE: ${ intrinsic('4/3', 'url("images/bg.jpg") 0 0 no-repeat transparent') }
export function intrinsic(ratio = '4/3', background = '#fff') {
  let paddingTop = '100%';
  if (ratio === '4/3') {
    paddingTop = '75%';
  } else if (ratio === '16/9') {
    paddingTop = '56.25%';
  }

  return `
    // Make sure <picture> wrapper is set to block
    // Max-width is governed by parentNode
    display: block;

    // Intrinsic Ratio Box
    position: relative;
    height: 0;
    width: 100%;
    padding-top: ${paddingTop};

    // Custom Styling
    background: ${background};

    // Force the item to fill the intrinsic box
    //.intrinsic-item {
    > * {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `;
}

