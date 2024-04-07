document.addEventListener('scroll', function() {
    var textList = document.querySelectorAll('.service-item');
    var middleOfViewport = window.innerHeight / 2;
  
    textList.forEach(function(text) {
      var textPosition = text.getBoundingClientRect();
      var distanceFromMiddle = Math.abs(textPosition.top + textPosition.height / 2 - middleOfViewport);
      var blurAmount = distanceFromMiddle / middleOfViewport * 9; 
      var opacity = 1 - (distanceFromMiddle / middleOfViewport);
  
      text.style.filter = 'blur(' + blurAmount + 'px)';
      text.style.opacity = opacity;
    });
  });
  