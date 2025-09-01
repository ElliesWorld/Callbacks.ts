/*Write one function that can do addition, subtraction, multiplication, and division. 
It should take two numbers, an operation string, and a callback.  */


type printResultFunction = (result: number) => void;

const calculate = (a: number, b: number, operation: string, printResult: printResultFunction) => {
    let result: number;
    switch (operation) {
        case "add":
            result = a + b;
            break;
        case "subtract":
            result = a - b;
            break;
        case "multiply":
            result = a * b;
            break;
        case "divide":
            if (b == 0) {
                console.log("Error:Division by zero is not allowed.");
                return;
            }
            result = a / b;
            break;
        default:
            console.log("Error: Invalid operation");
            return;
    }

    printResult(result); // Calling the callback function with the calculated result
};

//This is the callback that prints the result
const printResult = (result: number) => {
    console.log
        (
            "The result is: ", result
        );
};

calculate(500, 600, "add", printResult);

calculate(500, 600, "subtract", printResult);

calculate(500, 600, "multiply", printResult);

calculate(500, 600, "divide", printResult);

calculate(500, 0, "divide", printResult);