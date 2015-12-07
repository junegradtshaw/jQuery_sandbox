//instructions:

// Write a script that , when you click on the button,
// adds a new fox RANDOM image to the container div.
// All foxes should be floated.  Make another button to remove all foxes.

// Stretch:   Make several buttons that change the way the foxes are
// added and displayed.  Example:  a new add button would change all
// to display: block in the existing dom and add a new random fox which is
// also display: block.  Hit the display float button and they all change
// back to float and it adds a new floated random fox.

$('#trigger').click(function () {
    genFoxes();
    $('#container')
  }
)

$('#remFoxes').click(function () {
    $('#container').empty();
  }
)

$('#addFloatFox').click(function () {
    genFoxes();
    $('#container img').css('display', 'inline-block');
    // $('#container').style.display = 'inline-block';
  }
)

$('#addBlockFox').click(function () {
    genFoxes();
    $('#container img').css('display', 'block');
  }
)

function genFoxes() {
  var foxStringName = genFoxFileName();
  var img = document.createElement("img");
  img.src=foxStringName;
  $('#container').append(img);
}

function genFoxFileName() {
  var randd = Math.floor((Math.random() * 3) );
  var foxStringName = collection["images"][randd]["image_src"];
  return (foxStringName);
}
