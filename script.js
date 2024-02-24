//fetch the header html to inject into both pages
// Use the Fetch API to get the content of the common HTML file
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    // Inject the retrieved HTML content into the common-content div
    document.getElementById('header').innerHTML = data;
  })
  .catch(error => console.error('Error fetching common content:', error))

// parallax effect
window.addEventListener('scroll', function() {
    var heroContainer = document.querySelector('.heroContainer');
    var img = document.querySelector('.heroContainer img');
  
    var scrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

    // Adjust the translateY value to control the downward movement
    var translateY = Math.min(190, scrollY * 0.6);
  
    img.style.transform = 'translate(0px, ' + translateY + 'px)';
  });