"use strict";

// Chapter 3, Exericse 1.
function min(x, y) {
	if (x < y) {
		return x;
	}
	else {
		return y;
	}
}

// Chapter 3, Exercise 2. 
function isEven(num) {
	if (num === 0) {
		return true;
	}
	else if (num === 1) {
		return false;
	}
	else if (num < 0) {
		return;
	}
	else {
		return isEven(num - 2);
	}
}

// Chapter 3, Exercise 3, Part A
function countBs(string) {
	var total = 0;

	for (var i = 0; i < string.length; ++i) {
		if (string.charAt(i) === 'B') {
			++total;
		}
	}

	return total;
}

// Chapter 3, Exercise 3, Part B
function countChar(string, theChar) {
	var total = 0;

	for (var i = 0; i < string.length; ++i) {
		if (string.charAt(i) === theChar) {
			++total;
		}
	}

	return total;
}

console.log('Exercise 1');
console.log(min(0,10));
console.log(min(0,-10));

console.log('\nExercise 2');
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

console.log('\nExercise 3');
console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));