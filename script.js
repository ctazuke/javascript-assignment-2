// Do your work in this file.

// Show the number of boxes.
console.log(random);

//Get all divs with class of .box and name them as boxes[]. 
var boxes = document.querySelectorAll(".box");
console.log(boxes.length);

// Write a for loop to add a click event listener on all divs with class box.
for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", boxClicked);
  if (boxes[i].className == "box") {
    boxes[i].className = "clicked"
    console.log("class of the box ["+i+"] changed to 'clicked'");
  } else {
    boxes[i].className = "class"
    console.log("class of the box ["+i+"] changed back to 'class'");
  }
}

function boxClicked() {
  if (random < 201) {
    console.log("the number of boxes is less than 201");
  } else if (random < 301) {
    document.body.style.backgroundColor = "yellow"
  } else if (random < 401) {
    document.body.style.backgroundColor = "green"
  } else if (random < 501) {
    document.body.style.backgroundColor = "purple"
  } else if (random < 601) {
    document.body.style.backgroundColor = "orange"
  } else if (random < 701) {
    document.body.style.backgroundColor = "pink"
  } else if (random < 801) {
    document.body.style.backgroundColor = "black"
  } else if (random < 901) {
    document.body.style.backgroundColor = "brown"
  } else {
    document.body.style.backgroundColor = "blue"
  }

  if (div.className == "box") {
    div.className = "clicked"
    console.log("class of the box ["+i+"] changed to 'clicked'");
  } else {
    div.className = "class"
    console.log("class of the box ["+i+"] changed back to 'class'");
  }
}




