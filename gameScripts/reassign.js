
    function reassign() {
      for(var i = 0;i < gamepadInputOld.length;i++) {
        gamepadInput[i] = gamepadInputOld[i];
      }
      for(var i = 0;i < gamepadAxesOld.length;i++) {
        gamepadAxes[i] = gamepadAxesOld[i];
      }
      
	if(gamepadIndex === undefined) {
        if(keyInput[37]) {dpadInput[0] = -1;}//Left
        if(keyInput[39]) {dpadInput[0] = 1;}//Right
        if(keyInput[38]) {dpadInput[1] = 1;}//Up
        if(keyInput[40]) {dpadInput[1] = -1;}//Down
	  gamepadInput[2] = keyInput[90];
	  gamepadInput[1] = keyInput[88];
	  gamepadInput[3] = keyInput[67];
      }
	
      //reassignInput(0,1);
      //reassignInput(1,0);
    }