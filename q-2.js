const findLength = (testArray) => {
	function* makeGen () {
		yield* testArray;
	}
	const arrayItem = makeGen();
	let done = false;
	let count = 0;
	while (!done) {
		if (arrayItem.next().done) {
			done = true;
		}
		count += 1;
	}
	return count - 1;
};

console.log(findLength([1, 2, 4, undefined, 3, undefined]));
