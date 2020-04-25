$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.dance').on('click', function(event) {

    var dance = function() {
    //iterate through window.dancers
      for (var i = 0; i < window.dancers.length; i++) {
        var oldLeft = parseInt(window.dancers[i].$node.css('left'));
        var oldTop = parseInt(window.dancers[i].$node.css('top'));

        if (i !== window.dancers.length - 1) {
          var newLeft = parseInt(window.dancers[i+1].$node.css('left'));
          var newTop = parseInt(window.dancers[i+1].$node.css('top'));

        } else {
          var newLeft = parseInt(window.dancers[0].$node.css('left'));
          var newTop = parseInt(window.dancers[0].$node.css('top'));
        }

        if (oldLeft > newLeft) {
          window.dancers[i].$node.css('left', '-=.5');
        } else {
          window.dancers[i].$node.css('left', '+=.5');
        }

        if (oldTop > newTop) {
          window.dancers[i].$node.css('top', '-=.5');
        } else {
          window.dancers[i].$node.css('top', '+=.5');
        }
      }
    };

    setInterval(dance, 1);
  });

  $('.lineUp').on('click', function(event) {
    var yPosition = 0;
    var move = function() {
      for (var i = 0; i < window.dancers.length; i++) {
        var dancer = window.dancers[i];
        if (parseInt (dancer.$node.css('left')) > yPosition) {
          dancer.$node.css('left', '-=1');
        }
      }
    };
    setInterval(move, 1);
  });

});
