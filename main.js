// alert("I work!");

// Your job is to create a web page that, when the user clicks anywhere in the window, randomly determine if an air traveller should go down the left lane or the right lane by displaying an arrow in that direction.

window.addEventListener('click', function(arrowMaker){
  var randomClick = Math.floor(Math.random()*2);
  var randomArrow = document.getElementById("which-way");
  if (randomClick === 1) {
      randomArrow.innerHTML = '<img src="images/left.png" class="smaller respond">';
  } else {
    randomArrow.innerHTML = '<img src="images/right.png" class="smaller respond">';
  }
});