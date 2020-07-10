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
  // Other configurations
  dependencies: [
    // Other plugins
    {
      src: './dist/lib/revealjs-animated.js',
      async: true
    }
  ]
});
Reveal.configure({ mouseWheel: true, slideNumber: true,});


// Reveal.on('slidechanged', event => {
//   console.log(event);
// })