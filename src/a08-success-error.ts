/*Make a function that takes two callbacks: 
one for success and one for error. 
Use Math.random() to decide which to call. */

type success = (message: string) => void;
type error = (message: string) => void;

const message = (callbackSuccess: success, callbackError: error): void =>
{
    const randomNumber = Math.random();
    if (randomNumber > 0.5)
    {
    callbackSuccess("Operation was a success!");
    }
    else
    {
    callbackError("Operation failed.");
  }
};

// Callback for success 
const successMessage: success = (message: string) => {
  console.log("SUCCESS:", message);
};
// Callback for error 
const errorMessage: error = (message: string) => {
  console.log("Error:", message);
};

// Passing both callbacks, one will be called randomly
message(successMessage, errorMessage);


