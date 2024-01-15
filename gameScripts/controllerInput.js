
    function reassignInput(num1, num2) {
      gamepadInput[num1] = gamepadInputOld[num2];
    }
    function reassignAxis(num1, num2) {
      gamepadAxes[num1] = gamepadAxesOld[num2];
    }

    // global gamepad object
    let gamepadIndex;
    window.addEventListener('gamepadconnected', (event) => {
      gamepadIndex = event.gamepad.index;
    });

    var keyInput = [];
    document.addEventListener('keydown', function(event) {
      keyInput[event.keyCode] = true;
    });
    document.addEventListener('keyup', function(event) {
      keyInput[event.keyCode] = false;
    });

    var gamepadInputOld = [];
    var gamepadAxesOld = [];
    var gamepadInput = [];
    var gamepadAxes = [];
    var dpadInput = [];
    setInterval(() => {
      //Button Input
      if(gamepadIndex !== undefined) {
        // a gamepad is connected and has an index
        const myGamepad = navigator.getGamepads()[gamepadIndex];
        myGamepad.buttons.map(e => e.pressed).forEach((isPressed, buttonIndex) => {
          if(isPressed) {
            // button is pressed; indicate this on the page
            gamepadInputOld[buttonIndex] = true;
          } else {
            gamepadInputOld[buttonIndex] = false;
          }
        })

        //Axis Input
        const myGamepad2 = navigator.getGamepads()[0]; // use the first gamepad
        for(var i = 0;i < myGamepad2.axes.length;i++) {
          gamepadAxesOld[i] = myGamepad2.axes[i];
        }
      }

      //Converts dpad input to radians ==>  Dpad is not resting? Convert. Else assign to NaN
      var dpad = Math.round(gamepadAxes[9]) !== 3? (gamepadAxes[9] * 7/16 + 0.4375) * 2 * Math.PI: NaN;
      dpadInput = [Math.round(Math.sin(dpad)), Math.round(Math.cos(dpad))]; //Tells which direction dpad is pressed
	
      reassign();
      
      /*console.log("Buttons: \n" + gamepadInputOld);
      console.log("Reassigned Buttons: \n" + gamepadInput);
      console.log("Axes: \n" + gamepadAxesOld);
      console.log("Reassigned Axes: \n" + gamepadAxes);*/
	
    }, 15)