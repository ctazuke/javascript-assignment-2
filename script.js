// Do your work in this file.

// Show the number of boxes.
console.log(random);

//Get all divs with class of .box and name them as boxes[]. 
var boxes = document.querySelectorAll(".box");
console.log(boxes.length);

//Define a function bGColor()
function bGColor() {
  if (boxes.length < 201) {
    console.log("the number of boxes is less than 201");
  } else if (boxes.length < 301) {
    document.body.style.backgroundColor = "yellow"
  } else if (boxes.length < 401) {
    document.body.style.backgroundColor = "green"
  } else if (boxes.length < 501) {
    document.body.style.backgroundColor = "purple"
  } else if (boxes.length < 601) {
    document.body.style.backgroundColor = "orange"
  } else if (boxes.length < 701) {
    document.body.style.backgroundColor = "pink"
  } else if (boxes.length < 801) {
    document.body.style.backgroundColor = "black"
  } else if (boxes.length < 901) {
    document.body.style.backgroundColor = "brown"
  } else {
    document.body.style.backgroundColor = "blue"
  }
}

function boxClass() {
  
}

// Write a for loop to add a click event listener on all divs with class box.
for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", bGColor);
  boxes[i].addEventListener("click", boxClass);
}


  // if (div.className == "box") {
  //   div.className = "clicked"
  //   console.log("class of the box ["+i+"] changed to 'clicked'");
  // } else {
  //   div.className = "box"
  //   console.log("class of the box ["+i+"] changed back to 'class'");
  // }


