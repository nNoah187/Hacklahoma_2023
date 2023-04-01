// This function replaces all images on the page with a picture of Yodbama
function replaceImages() {
  // Get all image elements on the page
  let images = document.getElementsByTagName('img');

  // Loop through all image elements
  for (let i = 0; i < images.length; i++) {
    // Replace the image source with a picture of Yodbama
    images[i].src = 'https://ih1.redbubble.net/image.706981852.7957/st,small,845x845-pad,1000x1000,f8f8f8.jpg';
  }
}

// Run the replaceImages function when the page loads
window.onload = replaceImages;