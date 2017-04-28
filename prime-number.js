
function isPrimeNumber(n) {
	if (n <= 1) {
		return false;
	}
	for (var i = 2; i < n; ++i) {
		if (n % i == 0) {
			return false;
		}
	}
	return true;
}

function getPrimeNumbers(max) {
	var nums = [];
	for (var i = 0; i < max; ++i) {
		if (isPrimeNumber(i)) {
			nums.push(i);
		}
	}
	return nums;
}

function getMaxPrimeNumber(max) {
	for (var i = max - 1; i > 0; --i) {
		if (isPrimeNumber(i)) {
			return i;
		}
	}
	return null;
}

console.log( getPrimeNumbers(100) );

console.log( getMaxPrimeNumber(10) );
console.log( getMaxPrimeNumber(50) );
console.log( getMaxPrimeNumber(100) );