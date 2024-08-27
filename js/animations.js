function displayAnimation(class1, class2) {
  window.addEventListener('scroll', function() {
    var targets = document.querySelectorAll(class1);

    targets.forEach(target => {
      var targetPosition = target.getBoundingClientRect().top;
        
      var windowHeight = window.innerHeight;
        
      if (targetPosition < windowHeight && targetPosition >= 0) {
        target.classList.add(class2);
      } 
    }); 
  });
}

const initAnimation = () => {
  displayAnimation('.float-down-animation', 'reveal-text-down');
  displayAnimation('.img-animation', 'img-grow');
  displayAnimation('.img-reveal-animation', 'img-display-left-to-right');
}

initAnimation();
