import "./styles.css";
import $ from "jquery";

document.getElementById("app").innerHTML = `
<h1>Hello!</h1>
<div>
  This is a simple example of a loading spinner in only CSS
  
  <br />
  <br />
  <br />
  loading messages:<input id='loading-message' />
  <br />
  <button id="github">click me</button>
</div>
`;

var addLoaderScreen = function(message) {
  var removeLoaderButton = $("<div/>", {
    html: "<button id='hide-loader'>X</button>"
  });

  var loaderCircles = $("<div/>", {
    html:
      '<div><div class="shape shape-1"></div><div class="shape shape-2"></div><div class="shape shape-3"></div><div class="shape shape-4"></div></div>',
    id: "loading-circles"
  });

  var fullscreen = $("<div/>", {
    html: "<div><p class='loader-message'>" + message + "</p></div>",
    id: "fullscreen"
  });

  // Adding things to each other
  removeLoaderButton.appendTo(fullscreen);
  loaderCircles.appendTo(fullscreen);
  $(fullscreen).appendTo("body");
};

addLoaderScreen("waiting for things to happen");
$("#github").click(function() {
  // get the custom message
  var customMessage = $("#loading-message").val();

  // show the loader
  addLoaderScreen(customMessage);

  // clear the message
  $("#loading-message").val("");
});

$(document).on("click", "#hide-loader", function() {
  $("#fullscreen").remove();
});
