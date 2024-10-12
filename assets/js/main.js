$(document).ready(function () {});

$(".tm-carousel").owlCarousel({
  loop: true,
  margin: 22,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsiveClass: true,
  navText: [
    '<img src="assets/images/arrow-left-light.svg" alt="Left Arrow" />',
    '<img src="assets/images/arrow-right-light.svg" alt="Right Arrow" />',
  ],
  responsive: {
    0: {
      items: 1,
    },
    300: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3.5,
    },
  },
});
$(".about-us-carousel").owlCarousel({
  loop: true,
  margin: 22,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsiveClass: true,
  navText: [
    '<img src="assets/images/arrow-left-light.svg" alt="Left Arrow" />',
    '<img src="assets/images/arrow-right-light.svg" alt="Right Arrow" />',
  ],
  responsive: {
    0: {
      items: 1,
    },
    300: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2.5,
    },
  },
});

// for mobile sidebar toggle
document.addEventListener("DOMContentLoaded", function () {
  // Toggle menu and body scroll on menu click
  document.querySelector(".mobile-menu").addEventListener("click", function () {
    document.querySelector("header").classList.toggle("show");
    document.body.classList.toggle("no-scroll");
  });

  // Close the sidebar if clicking outside of it
  document.addEventListener("click", function (event) {
    // Check if the click is outside the sidebar and the menu button
    if (
      !event.target.closest("header") &&
      !event.target.closest(".mobile-menu")
    ) {
      if (document.querySelector("header").classList.contains("show")) {
        document.querySelector("header").classList.remove("show");
        document.body.classList.remove("no-scroll");
      }
    }
  });

  // close via close btn
  document.querySelector(".close-sidebar-btn").addEventListener("click", () => {
    document.querySelector("header").classList.remove("show");
    document.body.classList.remove("no-scroll");
  });
});

// video-pop up
window.addEventListener("DOMContentLoaded", () => {
  const videoContainer = document.querySelector(".video-container");
  const video = document.getElementById("interactive-video");
  const playPauseButton = document.getElementById("play-pause");
  const muteUnmuteButton = document.getElementById("mute-unmute");
  const closeButton = document.getElementById("close-video");
  const button1 = document.getElementById("button1");
  const button2 = document.getElementById("button2");

  // Show video container after 2 seconds delay
  setTimeout(() => {
    videoContainer.style.display = "block";
  }, 2000);

  // Play the video once
  video.play();
  const playIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M5.33203 16V11.2534C5.33203 5.36002 9.50536 2.94669 14.612 5.89336L18.732 8.26669L22.852 10.64C27.9587 13.5867 27.9587 18.4134 22.852 21.36L18.732 23.7334L14.612 26.1067C9.50536 29.0534 5.33203 26.64 5.33203 20.7467V16Z" fill="#FDFDFE"/>
  </svg>`;

const pauseIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M14.2 25.48V6.52C14.2 4.72 13.44 4 11.52 4H6.68C4.76 4 4 4.72 4 6.52V25.48C4 27.28 4.76 28 6.68 28H11.52C13.44 28 14.2 27.28 14.2 25.48Z" fill="#FDFDFE"/>
  <path d="M28.0008 25.48V6.52C28.0008 4.72 27.2408 4 25.3208 4H20.4808C18.5741 4 17.8008 4.72 17.8008 6.52V25.48C17.8008 27.28 18.5608 28 20.4808 28H25.3208C27.2408 28 28.0008 27.28 28.0008 25.48Z" fill="#FDFDFE"/>
  </svg>`;

  // Play/Pause functionality
  const handlePlayPause = () => {
    playPauseButton.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      if (video.paused) {
        video.play();
        playPauseButton.innerHTML = pauseIcon; // Set to pause icon
      } else {
        video.pause();
        playPauseButton.innerHTML = playIcon; // Set to play icon
      }
    });
  };

  handlePlayPause();

  // Mute/Unmute functionality
  const handleMuteUnmute = () => {
    const muteIcon = ` <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="white"
        >
          <path
            d="M3.33203 16.9323V23.5989C3.33203 26.9323 4.9987 28.5989 8.33203 28.5989H10.7154C11.332 28.5989 11.9487 28.7823 12.482 29.0989L17.3487 32.1489C21.5487 34.7823 24.9987 32.8656 24.9987 27.9156V12.6156C24.9987 7.64893 21.5487 5.74893 17.3487 8.38227L12.482 11.4323C11.9487 11.7489 11.332 11.9323 10.7154 11.9323H8.33203C4.9987 11.9323 3.33203 13.5989 3.33203 16.9323Z"
            stroke="white"
            stroke-width="1.5"
          />
          <path
            d="M36.6664 23.5326L30.0664 16.9326"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M36.6 16.999L30 23.599"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />`;

    const unMuteIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="white">
        <path d="M3.33203 16.6666V23.3333C3.33203 26.6666 4.9987 28.3333 8.33203 28.3333H10.7154C11.332 28.3333 11.9487 28.5166 12.482 28.8333L17.3487 31.8833C21.5487 34.5166 24.9987 32.6 24.9987 27.65V12.35C24.9987 7.38331 21.5487 5.48331 17.3487 8.11664L12.482 11.1666C11.9487 11.4833 11.332 11.6666 10.7154 11.6666H8.33203C4.9987 11.6666 3.33203 13.3333 3.33203 16.6666Z" stroke="white" stroke-width="1.5"/>
        <path d="M30 13.3333C32.9667 17.2833 32.9667 22.7166 30 26.6666" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M33.0508 9.16675C37.8674 15.5834 37.8674 24.4167 33.0508 30.8334" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;

    muteUnmuteButton.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      if (video.muted) {
        video.muted = false;
        muteUnmuteButton.innerHTML = unMuteIcon;
      } else {
        video.muted = true;
        muteUnmuteButton.innerHTML = muteIcon;
      }
    });
  };

  handleMuteUnmute();

  // Expand the video on click
  video.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    videoContainer.classList.toggle("expanded");
  });

  // Close the video
  closeButton.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    videoContainer.style.display = "none";
    video.muted = true;
  });

  // Add an event listener for when the video ends
  video.addEventListener("ended", () => {
    playPauseButton.innerHTML = playIcon;
  });

  // Navigation buttons
  button1.addEventListener("click", () => {
    window.location.href = "page1.html";
  });

  button2.addEventListener("click", () => {
    window.location.href = "page2.html";
  });
});

//   counter in report page
(() => {
  const counters = document.querySelectorAll(".tm-counter");

  const startCounting = (counter) => {
    const counterValue = counter.querySelector(".tm-counter-value");
    const target = +counter.getAttribute("data-target");
    const speed = +counter.getAttribute("data-speed");
    const increment = target / (speed / 100); // Update every 100ms

    let currentValue = 0;

    const updateCounter = () => {
      currentValue += increment;
      if (currentValue < target) {
        counterValue.textContent = Math.ceil(currentValue);
        setTimeout(updateCounter, 100);
      } else {
        counterValue.textContent = target;
      }
    };

    updateCounter();
  };

  const observerOptions = {
    root: null,
    threshold: 0.1,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounting(entry.target);
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  counters.forEach((counter) => {
    observer.observe(counter);
  });
})();

// aos
document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});

// video pop up hidden in footer
window.addEventListener("DOMContentLoaded", () => {
  const videoContainer = document.querySelector(".video-container");
  const footer = document.querySelector("footer");

  // Show video container after 2 seconds delay
  setTimeout(() => {
    videoContainer.style.display = "block";
  }, 2000);

  // Function to move the video popup above the footer when user enters the footer
  const moveVideoAboveFooter = () => {
    const footerRect = footer.getBoundingClientRect();
    const videoHeight = videoContainer.offsetHeight;

    // If the user has entered the footer section
    if (footerRect.top < window.innerHeight) {
      // videoContainer.style.position = "absolute"; // Switch to absolute positioning
      // videoContainer.style.bottom = `${footerRect.height + 10}px`; // Move it above the footer
      videoContainer.style.top = "18%";
      videoContainer.style.bottom = "auto";
    } else {
      videoContainer.style.top = "auto";
      videoContainer.style.bottom = "4%"; // Restore to original position
    }
  };

  // Listen to scroll and resize events to constantly check the position
  window.addEventListener("scroll", moveVideoAboveFooter);
  window.addEventListener("resize", moveVideoAboveFooter);

  // Initial check to ensure the video container starts in the correct position
  moveVideoAboveFooter();
});
