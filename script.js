// This function replaces all images on the page with a picture of Yodbama
function replaceImages() {
  // Get all image elements on the page
  let images = document.getElementsByTagName('img');

  // Loop through all image elements
  for (let i = 0; i < images.length; i++) {
    // Replace the image source with a picture of Yodbama
    images[i].src = 'https://i.kym-cdn.com/photos/images/newsfeed/001/441/147/84e.jpg';
  }
}

// Run the replaceImages function when the page loads
window.onload = function() {
  replaceImages();

  // Observe changes to the DOM and run replaceImages when changes occur
  let observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList') {
        replaceImages();
      }
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
};
