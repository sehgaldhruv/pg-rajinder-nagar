const stars = document.querySelectorAll('.star');
const feedbackTextarea = document.querySelector('.feedback');
const submitButton = document.querySelector('.submit-button');
const featuredListings = document.querySelector('.featured-listings')

featuredListings.addEventListener('click', () => {
    // Replace "destination.html" with the desired HTML file's location
    // window.location.href = "listing.html";
    
  });

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    // Set the rating based on the clicked star's index
    const rating = index + 1;
    // Mark the clicked star and previous stars as selected
    for (let i = 0; i <= index; i++) {
      stars[i].classList.add('selected');
    }
    // Unmark the remaining stars
    for (let i = index + 1; i < stars.length; i++) {
      stars[i].classList.remove('selected');
    }
    // Store the rating in a hidden input field or send it to the server
    // For this example, we'll just log the rating to the console
    console.log('Rating:', rating);
  });
});

submitButton.addEventListener('click', () => {
  const feedback = feedbackTextarea.value;
  // Send the feedback to the server or process it as needed
  // For this example, we'll just log the feedback to the console
  console.log('Feedback:', feedback);
  // Clear the textarea and reset the rating stars
  feedbackTextarea.value = '';
  stars.forEach(star => star.classList.remove('selected'));
});