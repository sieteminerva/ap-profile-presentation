console.log('YMGH');

function setSlideTitle(index) {
  let title;
  switch (index) {
    case 0:
      title = 'Cover'
      break;

    default:
      break;
  }
}

Reveal.initialize({
  transition: 'convex',
  display: 'flex',
  center: false,
  controlsLayout: 'edges',
  slideNumber: "h/v",
  hash: true,
  mouseWheel: true,
  // Other configurations
  plugins: [Appearance],
  appearance: {
    baseclass: 'animated',
    // Use a specific class for the visible state.
    visibleclass: 'in',
    // Change this if you want to see the shown elements if you go back
    hideagain: true,
    // Base time between appearances
    delay: 300
  }
});


// Reveal.on('slidechanged', event => {
//   console.log(event);
// })

