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
                numStack[0] = currentVal;
                numArr = numArr.slice(1, numArr.length);
                break;
            }
         
            var top_stackVal = numStack[numStack.length - 1];

            if ((top_stackVal + currentVal) % 2 == 0) {
                // Remove the last element from the stack
                numStack = numStack.slice(0, numStack.length - 1);
                console.log(numStack)

                // Remove the first element from the array
                numArr = numArr.slice(1, numArr.length - 1);

                // Break out of the for loop to repeat it from the top
                break;
            }

            stackIndex = numStack.length
            numStack[stackIndex] = currentVal;

            // Exit condition -> iterate through the entire arr
            if (i == numArr.length - 1) {
                end = true;
            };
        }; // End of for loop
    }; // End of while loop

    console.log(numArr.length)
})
