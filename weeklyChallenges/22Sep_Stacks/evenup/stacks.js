const readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.on('line', (line) => {
    var numArr = line.split(' ');

    // Check that the numArr is not line 1 - i.e. n-value
    if (numArr.length <= 1) {return};

    var numStack = [];

    end = false;
    while(!end) {
        for (i = 0; i < numArr.length; i++) {
            var currentVal = numArr[i];            

            if (numStack.length == 0) {
				var stackVal = numArr.shift();
                numStack[0] = stackVal;
                break;
            }
         	
            var top_stackVal = numStack[numStack.length - 1];
			numArr.shift() // Regardless of whether sum == even, remove the first element in arr
			
			
			console.log(currentVal)
            if ((top_stackVal + currentVal) % 2 == 0) {
                // Remove the last element from the stack
				numStack.pop();

                // Break out of the for loop to repeat it from the top
                break;
            }

			else {
	            stackIndex = numStack.length - 1;
    	        numStack[stackIndex] = currentVal;
			}

            // Exit condition -> iterate through the entire arr
            if (i == numArr.length - 1) {
                end = true;
            };
        }; // End of for loop
    }; // End of while loop

    console.log(numStack.length)
})
