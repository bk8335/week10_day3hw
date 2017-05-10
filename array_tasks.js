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

	// insertAt: function (arr, itemToAdd, index) {
		
	// },

	// square: function (arr) {
		
	// },

	// sum: function (arr) {
		
	// },

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
