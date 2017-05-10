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

	findDuplicates: function (arr) {
		var duplicateArray = [];
		for(i=0; i<arr.length; i++){
			if(item[i] === item[i+1]){
				duplicateArray.push(item);
			}
		}
		return duplicateArray;
	},

	removeAndClone: function (arr, valueToRemove) {
		var newArray = [];
		for(item of arr){
			if(item != valueToRemove){
				newArray.push(item);
			}
		}
		return newArray;
	},

	findIndexesOf: function (arr, itemToFind) {
		var arrayOfPositions = [];
		var index = 0;
		for(item of arr){
			if(item === itemToFind){
				arrayOfPositions.push(index);
			}
			index +=1;
		}
		return arrayOfPositions;		
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var squareEvenArray = [];
		var squareEvenCounter = 0;
		for(item of arr){
			if(item % 2 === 0){
				squareEvenArray.push(item**2);
			}
		}
		for(item of squareEvenArray){
			squareEvenCounter += item
		}
		return squareEvenCounter;
	}

}

module.exports = arrayTasks
