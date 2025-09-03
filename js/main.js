const motionLogoPersonalBranding = document.getElementById(
  "animated-logo-video"
);

motionLogoPersonalBranding.addEventListener("click", playVideo);
/*first parameter in the event listener is what type of event it should react to
 * second defines a function that defines what is going to happen*/

function playPause() {
  if (motionLogoPersonalBranding.paused) {
    motionLogoPersonalBranding.play();
  } else {
    motionLogoPersonalBranding.pause();
  }
}

function playVideo() {
  this.play();
}
