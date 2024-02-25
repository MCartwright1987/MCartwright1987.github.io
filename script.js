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

  function updateParallax() {
    if (window.scrollY !== 0) {
      img.style.transform = 'translateY(' + Math.min(300, window.scrollY * 0.6) + 'px)';
    }
  }

  // Add scroll event listener
  window.addEventListener('scroll', function () {
    updateParallax();
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