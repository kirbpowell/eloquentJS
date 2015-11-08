"use strict";

var pound = "#";
var poundString = pound;
var stop = 8;

console.log("Start problem 1")

for (var i = 1; i < stop; i++) {
	console.log(poundString);
	poundString += pound;
}

console.log('End problem 1')

// ----------------------------------------------------------------------

var size = 8;

for(var i = 1; i <= 100; ++i) {
	var output = "";

	if ((i % 3) === 0) {
		output += "Fizz";
	}

	if ((i % 5) === 0) {
		output += "Buzz";
	}

	if (output === "") {
		output += i;
	}

	console.log(output);
}

// ---------------------------------------------------------------------- 

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
