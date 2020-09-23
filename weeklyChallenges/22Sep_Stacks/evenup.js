const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on('line', (line) => {
	// line.split(' ').length == 0 then line = 1
	if (line.split(' ').length > 1) {
		numArr = line.split(' ')
	}
	else {return}

	var end = true;
	loopCount = 0;
	while(loopCount <= (numArr.length / 2)) {
		var originalLen = numArr.length;

		for (i = 0; i < numArr.length; i++) {
			current = numArr[i] % 2 == 0 ? 'even' : 'odd'
			next = numArr[i + 1] % 2 == 0 ? 'even' : 'odd'

			if (current == next) {
				console.log(numArr)
				delete numArr[i]
				delete numArr[i + 1];
				break;
			}
		}
	
		if (originalLen > numArr.length) {
			loopCount = 0
		}	
		else {loopCount++}
	};

//	console.log(numArr)
});
