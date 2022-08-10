///////////////////////////////////////////////////////////////////////////////
/////
/////    DELTA PHI STAR - General purpose perceptual contrast
/////           Beta 0.0.1
/////    Copyright © 2022 by Andrew Somers. All Rights Reserved.
/////    LICENSE: AGPL 3 LICENSE
/////    CONTACT: Please use the ISSUES or DISCUSSIONS tab at:
/////    https://github.com/Myndex/deltaphistar/
/////
///////////////////////////////////////////////////////////////////////////////
/////
/////    MINIMAL IMPORTS:
/////      import { seestars } from 'seestars';
/////
/////
////////////////////////////////////////////////////////////////////////////////

//////////   DELTA PHI STAR  0.0.1 USAGE  //////////////////////////////////////
///
///  ________________________________________________________________________
///
///                  **********   QUICK START   **********
///
///          let contrast = contrastDPS(foreground, background)
///  
///           // foreground, background are any sRGB color string
///
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/////   BEGIN DELTA PHI STAR  0.0.1  BLOCK   \////////////////////////////////
////                                          \//////////////////////////////
///                                            \////////////////////////////
//                                              \//////////////////////////


/////  DEPENDENCIES  /////

// The following imports are not needed for the main APCA function,
// but are needed for the shortcut/alias calcAPCA(), and for the
// future invertAPCA function, which examines hue.


       ////  (add slash to line start for local test mode, remove before push)
//*    ////  LOCAL TESTING SWITCH for using test.html
    // import { colorParsley } from'../../colorparsley/src/colorparsley.js';
    import { seeStars } from'../../seestars/src/seestars.js';
/*/   //// TOGGLE
    // import { colorParsley } from 'colorparsley';
    import { seeStars } from "seestars";
// */ //// END LOCAL TESTING SWITCH



export function contrastDPS (foreground, background) {
    // send it a text and a bg color string, returns a value 0-100
	let txLstar = seeStars(foreground);
	let bgLstar = seeStars(background);

  let contrast = Math.pow( Math.abs(Math.pow(bgLstar, 1.618) - 
	               Math.pow(txLstar,1.618)), 0.618 ) * 1.414 - 40;
	               
	return  (contrast < 7.5) ? 0.0 : contrast ;
	        
}

// (Math.pow(bgLstar,1.618) - Math.pow(txLstar,1.618))**0.618 //
