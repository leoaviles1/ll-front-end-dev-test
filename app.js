var images = {
  man: {
    heading: "Man Image",
    description: "Image of a man.",
    path: "img/man.jpg"
  },
  wizard: {
    heading: "Wizard Image",
    description: "Image of a wizard.",
    path: "img/wizard.jpg"
  },
  beast: {
    heading: "Beast Image",
    description: "Image of a beast.",
    path: "img/beast.jpg"
  }
};

//Event Listener for mobile menu toggle button
document.querySelector(".mobile-toggle").addEventListener("click", function() {
  mobileNavToggle();
});

//Event Listener to exit mobile menu when link is clicked
document.querySelectorAll(".mobile-nav-link").forEach(item => {
  item.addEventListener("click", event => {
    mobileNavToggle();
  });
});

function mobileNavToggle() {
  //this will add active class to mobile-toggle to animate the button
  document.querySelector(".mobile-toggle").classList.toggle("active");

  //this will add show class to the mobile-nav-wrapper
  document.querySelector(".mobile-nav-wrapper").classList.toggle("show");
}
