/* 4 Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers
*/

//4
let sum = (arr) => {
	return arr.reduce((a,b) => a + b);
}
console.log(sum([3,2,5,9,100]));
let sum2 = 
	(arr) => {
		let sum = 0;
		for (let i=0; i<arr.length; i++){
			sum += arr[i];
		}
		return sum;
	}

console.log(sum2([3,2,5,9,100]));

let multiply = (arr) => {
	return arr.reduce((a,b) => a * b, 1);
}

console.log(multiply([3,9,100]));

let multiply2 = (arr) => {
	let temp = 1;
	for (let i = 0; i<arr.length; i++){
		temp *= arr[i];
	}
	return temp;
}
console.log(multiply2([3,9,100]));

//5    5 Define a function reverse() that computes the reversal of a string.

let reverse = (str) => {
	let temp = "";
	for (let i = str.length-1; i>=0; i--){
		temp = temp + str[i];
	}
	return temp;
}

console.log(reverse("Nguyen Thanh Nam"));

let reverse2 = (str) => {
	return str.split("").reduce((a,b)=> b + a,"");
}
console.log(reverse2("Nguyen Thanh Nam"));

//   7 Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i. 
let filterLongWords = (arr, i) => {
	return arr.filter(e => e.length > i);
}

console.log(filterLongWords(["Nguyen","Tran","aaa"],3));

