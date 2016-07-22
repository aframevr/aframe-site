/**
 * @license
 * 
 * The MIT License (MIT)
 *
 * Copyright (c) 2013 Rhys Brett-Bowen
 */
var debounce = function(func, wait) {
	// we need to save these in the closure
	var timeout, args, context, timestamp;

	return function() {

		// save details of latest call
		context = this;
		args = [].slice.call(arguments, 0);
		timestamp = new Date();

		// this is where the magic happens
		var later = function() {

			// how long ago was the last call
			var last = (new Date()) - timestamp;

			// if the latest call was less that the wait period ago
			// then we reset the timeout to wait for the difference
			if (last < wait) {
				timeout = setTimeout(later, wait - last);

			// or if not we can null out the timer and run the latest
			} else {
				timeout = null;
				func.apply(context, args);
			}
		};

		// we only need to set the timer now if one isn't already running
		if (!timeout) {
			timeout = setTimeout(later, wait);
		}
	}
};
