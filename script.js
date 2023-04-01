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

// This function listens for changes to the page's DOM and calls replaceImages
// whenever new nodes are added to the page
function observePage() {
  // Create a new MutationObserver to listen for changes to the page's DOM
  let observer = new MutationObserver(function(mutations) {
    // Loop through all mutations
    for (let i = 0; i < mutations.length; i++) {
      // Check if new nodes were added
      if (mutations[i].addedNodes.length > 0) {
        // Call replaceImages to replace any new images on the page
        replaceImages();
      }
    }
  });

  // Start observing the page's DOM for changes
  observer.observe(document.body, { childList: true, subtree: true });
}

// Run the replaceImages and observePage functions when the page loads
window.onload = function() {
  replaceImages();
  observePage();
};