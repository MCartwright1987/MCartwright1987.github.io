window.addEventListener('scroll', function() {
    var heroContainer = document.querySelector('.heroContainer');
    var img = document.querySelector('.heroContainer img');
  
    var scrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

    // Adjust the translateY value to control the downward movement
    var translateY = Math.min(190, scrollY * 0.61);
  
    img.style.transform = 'translate(0px, ' + translateY + '0px)';
  });