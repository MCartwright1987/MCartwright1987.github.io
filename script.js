function fetchAndInjectHeader() {
  fetch('header.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('header').innerHTML = data;
    })
    .catch(error => console.error('Error fetching header content:', error));
}

function addParallaxEffect() {
  var heroContainer = document.querySelector('.heroContainer');
  var img = document.querySelector('.heroContainer img');
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  // Use requestAnimationFrame for smoother scrolling
  function updateParallax() {
    if (window.scrollY === 0) {
      img.style.transform = 'translateY(0)';
    } else {
      img.style.transform = 'translateY(' + Math.min(300, window.scrollY * 0.6) + 'px)';
    }
  }

  // Add scroll event listener
  window.addEventListener('scroll', function () {
    // For mobile devices, use requestAnimationFrame
    if (isMobile) {
      requestAnimationFrame(updateParallax);
    } else {
      // For non-mobile devices, update directly
      updateParallax();
    }
  });
}

// Function to be executed when the DOM content is fully loaded
function init() {
  // Call functions to fetch header and add parallax effect
  fetchAndInjectHeader();
  addParallaxEffect();
}

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', init);