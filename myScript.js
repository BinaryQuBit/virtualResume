window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var image = document.querySelector('.scroll-image');
  image.style.top = scrollPosition + 'px'; /* set the top position of the image to the scroll position */
});