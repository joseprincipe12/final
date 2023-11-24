const stars = document.querySelectorAll('.star');
const ratingValue = document.querySelector('.rating-value');
stars.forEach((star) => {
  star.addEventListener('click', () => {
    const rating = star.getAttribute('data-rating');
    ratingValue.textContent = rating;
    resetStars();
    highlightStars(rating);
    displayThankYouMessage();
  });
});
function resetStars() {
  stars.forEach((star) => {
    star.classList.remove('active');
  });
}
function highlightStars(rating) {
  for (let i = 0; i < rating; i++) {
    stars[i].classList.add('active');
  }
}
function displayThankYouMessage() {
  const thankYouMessage = document.querySelector('.mensaje');
  thankYouMessage.style.display = 'block';
  setTimeout(() => {
    thankYouMessage.style.display = 'none';
  }, 5000); // El mensaje desaparecerá después de 3 segundos
}