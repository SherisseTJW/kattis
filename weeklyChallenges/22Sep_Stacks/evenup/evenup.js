const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on('line', (line) => {
	// line.split(' ').length == 0 then line = 1
	var numArr = line.split(' ');
	if (numArr.length <= 1) {return};

	var end = true;
	loopCount = 0;
	while(loopCount <= (numArr.length / 2)) {
		var originalLen = numArr.length;

		for (i = 0; i < numArr.length; i++) {
			current = Math.abs(numArr[i]) % 2 == 0 ? 'even' : 'odd'
			next = Math.abs(numArr[i + 1]) % 2 == 0 ? 'even' : 'odd'

			console.log(current)
			console.log(next)

			if (numArr[i] == 0) {current = 'even'}
			if (numArr[i + 1] == 0 && numArr[i + 1] != undefined) {next = 'even'}

			if (current == next) {
				numArr.splice(i, 2);
				break;
			}
		}
	
		if (originalLen > numArr.length) {
			loopCount = 0
		}	
		else {loopCount++}
	}
	console.log(numArr.length)
});
