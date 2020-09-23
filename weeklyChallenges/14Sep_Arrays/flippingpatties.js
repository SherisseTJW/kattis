const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

timings = {}
highestCount = 0
rl.on('line', (line) => {
	orderDetails = line.split(' ');
	if (orderDetails.length > 1) {
		// Check if the time is already a key in the JSON array
		if (!timings[orderDetails[0]]) { timings[orderDetails[0]] = 0 }
		if (!timings[orderDetails[1]]) { timings[orderDetails[1]] = 0 }

		// Increment the count for the timing
		timings[orderDetails[0]]++
		timings[orderDetails[1]]++
	}
	else {
		return;
	};
});
