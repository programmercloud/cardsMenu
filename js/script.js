var $demo = $(".demo");

// Get the number of elements with class "demo__section" and store it in a variable named numOfSections
var numOfSections = $(".demo__section").length;

// When an element with class "demo__menu-btn" is clicked, add the "menu-active" class to the $demo element
$(document).on("click", ".demo__menu-btn", function () {
  $demo.addClass("menu-active");
});

// When an element with class "demo__close-menu" is clicked, remove the "menu-active" class from the $demo element
$(document).on("click", ".demo__close-menu", function () {
  $demo.removeClass("menu-active");
});

// When an element with class "demo__section" is clicked inside an element with class "demo" that also has the "menu-active" class, perform the following actions:
$(document).on("click", ".demo.menu-active .demo__section", function () {
  // Store a jQuery object of the clicked element in a variable named $section
  var $section = $(this);
  // Get the value of the "data-section" attribute of the clicked element, convert it to a number, and store it in a variable named index
  var index = +$section.data("section");

  // Remove the "active" class from all elements with class "demo__section"
  $(".demo__section.active").removeClass("active");
  // Remove the "inactive" class from all elements with class "demo__section"
  $(".demo__section.inactive").removeClass("inactive");
  // Add the "active" class to the clicked element
  $section.addClass("active");
  // Remove the "menu-active" class from the $demo element
  $demo.removeClass("menu-active");

  // Loop through all elements with class "demo__section" starting from the index of the clicked element plus one, and add the "inactive" class to them
  for (var i = index + 1; i <= numOfSections; i++) {
    $(".demo__section[data-section=" + i + "]").addClass("inactive");
  }
});
