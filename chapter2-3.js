"use strict";

var size = 8; 

for (var i = 0; i < size; ++i) {
	var output = "";

	for (var j = 0; j < size; ++j) {

		if (((i + j) % 2) === 0) {
			output += " ";
		}
		else {
			output += "#";
		}
	}

	console.log(output);
}