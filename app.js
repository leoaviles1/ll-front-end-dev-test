//Declaring as IIFE to execute instantly
(function() {
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

  var title, heading, description, path;

  //for loop through the image object and grab heading, description, and path in each pass
  for (let key in images) {
    title = key;
    heading = images[key].heading;
    description = images[key].description;

    //Correcting path as they are incorrect within image object
    const strArr = images[key].path.split("/");
    path = "images/" + strArr[1];

    //add the image by passing arguments into addImage function
    addImages(title, heading, description, path);
  }

  function addImages(title, heading, desc, path) {
    var html, newHtml;
    //Create HTML string with placeholder text
    html =
      '<div class="box-image" style="background-image: url(\'%path%\');" title="%title%"><h2>%heading%</h2><p>%desc%</p></div>';

    //Replace all the placeholders
    newHtml = html
      .replace("%title%", title)
      .replace("%heading%", heading)
      .replace("%desc%", desc)
      .replace("%path%", path);

    //Insert the newHTML into the DOM
    document.querySelector(".gallery").insertAdjacentHTML("beforeend", newHtml);
  }
})();

//Event Listener for mobile menu toggle button
document
  .querySelector(".mobile-toggle-container")
  .addEventListener("click", function() {
    mobileNavToggle();
  });

//Event Listener to exit mobile menu when any mobile-nav-link is clicked
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
