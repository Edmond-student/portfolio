// Get all the navbar links
  const homeLink = document.getElementById('home-link');
  const aboutLink = document.getElementById('about-link');
  const portfolioLink = document.getElementById('portfolio-link');
  const contactLink = document.getElementById('contact-link');

  // Add a click event listener to each link
  homeLink.addEventListener('click', event => {
    event.preventDefault();
    slowScroll(document.getElementById('home'));
  });

  aboutLink.addEventListener('click', event => {
    event.preventDefault();
    slowScroll(document.getElementById('about'));
  });

  portfolioLink.addEventListener('click', event => {
    event.preventDefault();
    slowScroll(document.getElementById('portfolio'));
  });

  contactLink.addEventListener('click', event => {
    event.preventDefault();
    slowScroll(document.getElementById('contact'));
  });

  // Function to add a slow scroll effect
  function slowScroll(target) {
    const scrollTarget = target.offsetTop;
    const currentScroll = window.pageYOffset;
    const distance = scrollTarget - currentScroll;
    const duration = 1000;
    let start = null;

    function step(timestamp) {
      if (!start) {
        start = timestamp;
      }
      const progress = timestamp - start;
      window.scrollTo(0, easeInOut(progress, currentScroll, distance, duration));
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }

    function easeInOut(t, b, c, d) {
      t /= d / 2;
      if (t < 1) {
        return c / 2 * t * t + b;
      }
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    window.requestAnimationFrame(step);
  }