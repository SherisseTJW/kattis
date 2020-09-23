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
	while(end) {
		for (i = 0; i < numArr.length; i++) {
			
		}	
	}
});
