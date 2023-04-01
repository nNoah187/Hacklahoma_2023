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
window.onload = replaceImages;