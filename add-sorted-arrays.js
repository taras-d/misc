
function addSortedArrays(arrA, arrB) {
	var aLen = arrA.length, bLen = arrB.length,
		i = 0, j = 0,
		arrC = [];
	while (i < aLen || j < bLen) {
		if (i != aLen && j != bLen) {
			if (arrA[i] < arrB[j]) {
				arrC.push(arrA[i++]);
			} else if (arrA[i] > arrB[j]) {
				arrC.push(arrB[j++]);
			} else {
				arrC.push(arrA[i++]);
				arrC.push(arrB[j++]);
			}
		} else {
			if (i < aLen) {
				arrC.push(arrA[i++]);
			}
			if (j < bLen) {
				arrC.push(arrB[j++]);
			}
		}
	}
	return arrC;
}

var res;

// test 1
res = addSortedArrays(
	[1, 1, 2, 3, 10],
	[4, 5, 8, 10, 15, 20]
);
console.log('test 1 - ', res);

// test 2
res = addSortedArrays(
	[4, 5, 8, 10, 15, 20],
	[1, 1, 2, 3, 10]
);
console.log('test 2 - ', res);

// test 3
res = addSortedArrays(
	[1, 2, 3, 4],
	[]
);
console.log('test 3 - ', res);

// test 4
res = addSortedArrays(
	[],
	[1, 2, 5, 7]
);
console.log('test 4 - ', res);

// test 5
res = addSortedArrays(
	[],
	[]
);
console.log('test 5 - ', res);