let requestId;

function updateTexts() {
  const texts = document.querySelectorAll('.service-item');
  const viewportHeight = window.innerHeight;
  const middleThreshold = viewportHeight * 0.1;
  const scrollPosition = window.scrollY;

  texts.forEach(text => {
    const rect = text.getBoundingClientRect();
    const elementMiddle = rect.top + rect.height / 2;
    const distanceToMiddle = Math.abs(elementMiddle - viewportHeight / 2);

    const scale = distanceToMiddle < middleThreshold ? 1 : 0.5 + (0.2 * (middleThreshold / distanceToMiddle));
    const opacity = distanceToMiddle < middleThreshold ? 1 : 0 + (0.5 * (middleThreshold / distanceToMiddle));
    const blur = distanceToMiddle < middleThreshold ? 0 : 10 - (3 * (middleThreshold / distanceToMiddle));
    
    // Fade out and blur the text when it's outside the middle range
    text.style.opacity = opacity;
    text.style.filter = `blur(${blur}px)`;
    
    // Scale the text
    text.style.transform = `scale(${scale})`;
  });

  requestId = requestAnimationFrame(updateTexts);
}

window.addEventListener('scroll', function() {
  if (!requestId) {
    requestId = requestAnimationFrame(updateTexts);
  }
});

// Initial call to updateTexts to set initial state
updateTexts();

// Cancel animation frame when window is resized
window.addEventListener('resize', function() {
  cancelAnimationFrame(requestId);
  requestId = null;
});