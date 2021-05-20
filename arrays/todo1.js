// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
// var myArray = [1, 3, 5, 7];
// function pushFront(arr, value){
// 	for(var i=arr.length; i>0; i--){
// 		// arr[i]=arr[i-1]
// 		arr[0]=value;
// 	}
// }

// pushFront(myArray, 8);
// console.log(myArray);

// // Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
// var myArray = [1, 3, 5, 7]
// function popFront(arr){
// 	const val = arr[0];
// 	for(var i=0; i<arr.length; i++){
// 		arr[i]=arr[i+1];
// 		// arr.length = arr.length-1
// 	}
// 	return val
// }
// console.log(popFront(myArray));
// console.log(myArray);

// // Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

// function insertAt(arr, index, value){
// 	for(var i=0; i<arr.length; i++){
// 		if(i == index){
// 			arr[i] = value; 
// 		}
// 	}
// 	return arr;
// }
// console.log(insertAt([1,3,5,7], 2, 8));

// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).
function removeAt(arr, index){
	const val = 0;
	for(var i=0; i<arr.length; i++){
		arr[i]=arr[i+1];
		}
	console.log(val);
	return arr;
}

console.log(removeAt([1,3,5,7], 0));

// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.
function swapPositions(arr) {
	for(let i = 0; i < arr.length - 1; i = i + 2) {
		let temp = arr[i];
		arr[i] = arr[i + 1];
		arr[i + 1] = temp;
	}
}

swapPositions([1,2,3,4])

// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.
// Second: Solve this without using any nested loops.

function removeDupes(arr) {
	let newArr = [];
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] !== arr[i+1]) 
			newArr.push(arr[i])
	}
	return newArr;
}

removeDupes([1,3,5,7,8,3,7,1])