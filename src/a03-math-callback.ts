/*Create a function that takes two numbers and a callback. 
The function should add the numbers and send the result to the callback. */

type printResultFunction = (result: number) => void;

const calculate = (a: number, b: number, printResult: printResultFunction) => {
    const result = a + b;
    printResult(result); // Calling the callback with the calculated result
};

// This callback handles how the result will be printed
const printResult = (result: number) => {
    console.log
        (
            "The result is: ", result
        );
};

// Pass printResult as the callback and it will be called with the sum of these two parameters (1100)
calculate(500, 600, printResult);