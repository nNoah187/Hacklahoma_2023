// This function replaces all images on the page with a picture of Yodbama
function replaceImages() {
  // Get all image elements on the page
  let images = document.getElementsByTagName('img');

  // Loop through all image elements
  for (let i = 0; i < images.length; i++) {
    // Replace the image source with a picture of Yodbama
    images[i].src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fknowyourmeme.com%2Fmemes%2Fyobama&psig=AOvVaw2-mwrO0msZxVI6btd4DTWm&ust=1680464725549000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNCvjt7Lif4CFQAAAAAdAAAAABAW';
  }
}

// Run the replaceImages function when the page loads
window.onload = replaceImages;