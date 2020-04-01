const findLongestSequence = sequence => {
	let seqs = {}; let thisNum;
	let maxFreq = 0; let num;
	for (let i = 0; i < sequence.length; i++) {
		for (let j = 0; j < sequence[i].length; j++) {
			thisNum = sequence[i][j];
			if (thisNum in seqs) {
				seqs[thisNum] += 1;
			} else {
				seqs[thisNum] = 1;
			}
			if (maxFreq < seqs[thisNum]) {
				maxFreq = seqs[thisNum];
				num = thisNum;
			}
			if (thisNum !== sequence[i][j + 1] && j !== sequence[i].length - 1) {
				seqs[thisNum] = 0;
			}
			if (i !== sequence.length - 1 && j === sequence[i].length - 1 && thisNum !== sequence[i + 1][0]) {
				seqs[thisNum] = 0;
			}
		}
	}
	return [num, maxFreq]
};

console.log(findLongestSequence([[0, 0, 0, 1], [0, 1, 1], [1, 1]]));
console.log(findLongestSequence([[0, 0, 0, 0], [1, 0, 1, 1], [0, 0, 0, 0], [1, 1, 1, 0]]));
console.log(findLongestSequence([[0, 0, 0, 0], [0, 0, 1, 1], [0, 0, 0, 0], [1, 1, 1, 0]]));
console.log(findLongestSequence([[0, 0, 0, 0], [0, 0, 1, 1], [1, 1, 1, 1], [1, 1, 1, 0]]));
console.log(findLongestSequence([[0, 0, 0, 0], [0, 0, 1, 1], [1, 1, 1, 1]]));
console.log(findLongestSequence([[0, 0, 0, 0], [0, 1, 1, 1], [1, 1, 1, 1]]));
console.log(findLongestSequence([[0, 0, 0, 0], [0, 0, 0, 1], [1, 1, 1, 1]]));
console.log(findLongestSequence([[0, 0, 0, 0], [0, 0, 0], [1, 1, 1, 1]]));
console.log(findLongestSequence([[0, 0, 0, 0], [0, 0, 0], [1, 1]]));
console.log(findLongestSequence([[0, 0, 0, 0], [0, 0, 0], [1, 1], [1]]));
