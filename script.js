/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/

/* Beggining of the game*/
const btn = document.querySelector("Button1"); // Get the button from the page
// Detect clicks on the button
$(".Scissors").on("click", function() {
  var result = compare("Scissors", computerChoice());
  $(".decision").html(result);
});

$(".Dwayne2ndcosuin").on("click", function() {
  var result = compare("Dwayne2ndcosuin", computerChoice());
  $(".decision").html(result);
});

$(".Paper").on("click", function() {
  var result = compare("Paper", computerChoice());
  $(".decision").html(result);
});



var compare = function(me, opponent) {
  if (me === "Dwayne2ndcosuin") {
    if (opponent === "Dwayne2ndcosuin") {
      return "Tie";
    } else if (opponent === "Paper") {
      return "Your rock lost to my paper :(";
    } else if (opponent === "Scissors") {
      return "Your rock crushed my scissors! >:)";
    } 
  } else if (me === "Paper") {
    if (opponent === "Paper") {
      return "Tie";
    } else if (opponent === "Dwayne2ndcosuin") {
      return "Your paper beat my rock :)";
    } else if (opponent === "Scissors") {
      return "Your paper got cut by  my scissors! >:)";
    }
  } else if (me === "Scissors") {
    if (opponent === "Scissors") {
      return "Tie";
    } else if (opponent === "Paper") {
      return "Your scissor cut my paper :(";
    } else if (opponent === "Dwayne2ndcosuin") {
      return "Your scissor got crushed! >:)";
    }
  } else {
    return "That doesn't make any sense!";
  }
};
var computerChoice = function() {
  var random = Math.random();
  if (random < 0.333) {
    return "Dwayne2ndcosuin";
  } else if (random < 0.67777) {
    return "Paper";
  } else {
    return "Scissors";
  }
};
// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/
