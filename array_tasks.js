var arrayTasks = {

	concat: function (arr1, arr2) {
		// var arr3 = [];
		// arr3 = arr1.concat(arr2);
		// return arr3;
		for(item of arr2){
			arr1.push(item);
		}
		return arr1;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		squareArray = [];
		for(item of arr){
			squareArray.push(item ** 2);
		}		
		return squareArray;
	},

	sum: function (arr) {
		var counter = 0;
		for(item of arr){
			counter += item;
		}
		return counter;
	},

	// findDuplicates: function (arr) {
		
	// },

	// removeAndClone: function (arr, valueToRemove) {
		
	// },

	// findIndexesOf: function (arr, itemToFind) {
		
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
