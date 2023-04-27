// select all links inside the nav bar
const links = document.querySelectorAll('nav a');

// iterate over the links and add event listener to each one
links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // prevent default behavior of clicking a link
    const href = link.getAttribute('href'); // get the href value of the clicked link
    const target = document.querySelector(href); // find the element with the corresponding ID
    const offsetTop = target.offsetTop; // get the offsetTop of the target element
    const scrollOptions = {
      top: offsetTop,
      behavior: 'smooth' // add smooth behavior to the scroll
    };
    window.scroll(scrollOptions); // scroll to the target element
  });
});

