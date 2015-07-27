
// gsap timeline
var timeline = new TimelineLite(),
    easingMode = Power4.easeInOut,
    animationDuration = 0.75;

// elements to animate
var $headline = $('.gsap-headline');
var $wow = $('.wow');
var $coin = $('.dogecoin');
var $gradient = $('.gradient');

timeline
  .from($gradient, animationDuration, {
    ease: easingMode,
    opacity: 0
  })
  .from($headline, animationDuration, {
    ease: easingMode,
    y: 1000
  })
  .from($wow, animationDuration, {
    ease: easingMode,
    x: -2000
  })
  .from($coin, animationDuration, {
    ease: easingMode,
    x: 2000
  });

