import colorParsley from "../colorparsley.js";
import { YtoLstar, toY } from "../seestars.js";


export default function contrastDPS (foreground, background) {
    // send it a text and a bg color string, returns a value 0-100
	let txLstar = YtoLstar(toY(colorParsley(foreground)));
	let bgLstar = YtoLstar(toY(colorParsley(background)));

	return (Math.abs(bgLstar^1.618 - txLstar^1.618)^0.618) * 1.3333 - 0.3333 ;
}

