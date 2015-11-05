"use strict";

function range(start, stop, increment) {
	var rangeArray = [];
	increment = (typeof increment !== 'undefined') ? increment : 1;

	if (increment > 0){
		for (let i = start; i <= stop; i+=increment) {
			rangeArray.push(i);
		}
	} else if (increment < 0){
		for (let i = start; i >= stop; i+=increment) {
			rangeArray.push(i);
		}
	} else {
		return;
	}

	return rangeArray;
}

function sum(numbers) {
	var theSum = 0;

	for (let i = 0; i < numbers.length; i++){
		theSum += numbers[i];
	}

	return theSum;
}

console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]

/*---------------------------------------------------------------------*/

function reverseArray(array) {
	var newArray = [];

	for (let i = array.length; i > 0; i--) {
		newArray.push(array.pop());
	}
  
	return newArray;
}

function reverseArrayInPlace(array) {
	let halfLength = Math.floor(array.length / 2);

	for (let i = 0; i < Math.floor(array.length / 2); i++){
		let temp = array[array.length - 1 - i];
		array[array.length - 1 - i] = array[i];
		array[i] = temp;
	}

	return array;
}


console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

/*---------------------------------------------------------------------*/

function arrayToList(array){
	let list = null;

	for (let i = array.length ; i > 0; i--){
		list = {value: array.pop(), rest: list};
	}

	return list;
}

function listToArray(list){
	let array = [];

	for (let node = list; node; node = node.rest){
		array.push(node.value);
	}

	return array;
}

function prepend(element, list){
	return {value: element, rest: list};
}

function nth(list, number){
	if (number === 0){
		return list.value;
	} else {
		return nth(list.rest, number -1 );
	}
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

/*---------------------------------------------------------------------*/

function deepEqual(one, two){
	if (typeof one === 'object' && one !== null){
		if (typeof two === 'object' && two !== null){
			var oneProps = 0, twoProps = 0;

			for (let prop in one){
				oneProps++;
			}

			for (let prop in two){
				twoProps++;
			}

			if (oneProps !== twoProps) {
				return false;
			}

			for (let prop in one) {
				if (prop in two === false){
					return false;
				} else
				{
					if (deepEqual(one[prop], two[prop]) === false){
						return false;
					}
				}
			}

			return true;
		} else {
			return one === two;
		}
	} else {
		return one === two;
	}
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true