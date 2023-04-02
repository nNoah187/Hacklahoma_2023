// Create an array of image paths
const images = [
  'https://i.kym-cdn.com/photos/images/newsfeed/001/441/147/84e.jpg',
  'https://www.linkpicture.com/q/yoda3.png',
  'https://www.linkpicture.com/q/yoda5.png',
  'https://www.linkpicture.com/q/yoda33.png',
'https://www.linkpicture.com/q/yoda2.png',
'https://www.linkpicture.com/q/yoda1.png',

'https://www.linkpicture.com/q/image_598.png',

'https://www.linkpicture.com/q/418097538003201.png',

  // Add as many image paths as you want to display randomly
];

// This function replaces all images on the page with a random image
function replaceImages() {
  // Get all image elements on the page
  const images = document.getElementsByTagName('img');

  // Loop through all image elements
  for (let i = 0; i < images.length; i++) {
    // Get a random index from the images array
    const randomIndex = Math.floor(Math.random() * images.length);

    // Replace the image source with a random image from the images array
    images[i].src = images[randomIndex];
  }
}

// Run the replaceImages function when the page loads
window.onload = function() {
  replaceImages();

  // Observe changes to the DOM and run replaceImages when changes occur
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList') {
        replaceImages();
      }
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
}; 
// Create an array of image paths
const imagePaths = [
  'https://i.kym-cdn.com/photos/images/newsfeed/001/441/147/84e.jpg',
  'https://www.linkpicture.com/q/yoda3.png',
  'https://www.linkpicture.com/q/yoda5.png',
  'https://www.linkpicture.com/q/yoda33.png',
  'https://www.linkpicture.com/q/yoda2.png',
  'https://www.linkpicture.com/q/yoda1.png',
  'https://www.linkpicture.com/q/image_598.png',
  'https://www.linkpicture.com/q/418097538003201.png',
  // Add as many image paths as you want to display randomly
];

// This function replaces all images on the page with a random image
function replaceImages() {
  // Get all image elements on the page
  const images = document.getElementsByTagName('img');

  // Loop through all image elements
  for (let i = 0; i < images.length; i++) {
    // Get a random index from the imagePaths array
    const randomIndex = Math.floor(Math.random() * imagePaths.length);

    // Replace the image source with a random image from the imagePaths array
    images[i].src = imagePaths[randomIndex];
  }
}

// Run the replaceImages function when the page loads
window.onload = function() {
  replaceImages();

  // Observe changes to the DOM and run replaceImages when changes occur
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList') {
        replaceImages();
      }
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
};