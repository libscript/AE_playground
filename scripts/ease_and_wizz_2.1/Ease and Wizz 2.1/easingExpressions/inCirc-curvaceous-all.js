// Ease and Wizz 2.1 : Curvaceous : inCirc : all keyframes
// Ian Haigh (http://ianternet.net/ease-and-wizz/)
// Last built: 2015-08-07T15:45:18+10:00

// some defaults
var p = 0.81;		// period for elastic
var a = 50;		// amplitude for elastic
var s = 1.70158;	// overshoot amount for "back"

function easeandwizz_inCirc(t, b, c, d) {
	return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
}


function easeAndWizz() {
	var n = 0;
	if (numKeys > 0) {
		n = nearestKey(time).index;
		if (key(n).time > time)	{ n-- }
	}

	// after the first two keys, yet before the last two, just do nothing
	if (n > 1 && n < numKeys -1 ) {
		return null;
	}

	try {
		var key1 = key(n);
		var key2 = key(n+1);
	} catch(e) {
		return null;
	}
	
	t = time - key1.time;
	d = key2.time - key1.time;

	sX = key1.time;
	eX = key2.time - key1.time;


	if ((time < key1.time) || (time > key2.time)) {
		return null;
	} else {
		return valueAtTime(easeandwizz_inCirc(t, sX, eX, d));
	}
}

(easeAndWizz() || value);

