/*Write a function that takes a string and a callback. 
The callback should return the string in uppercase. */

type callbackFunction = (message: string) => void;

const message = (callback: callbackFunction): void => {
    const message = `Hello from Callback!`;
    callback(message); // Calling the callback with the string
};

// The callback converts the received string to uppercase and prints it
const Callback: callbackFunction = (message: string) => {
  console.log(message.toUpperCase());
};

//Callback is passed as the callback and it will receive the string and make it uppercase
message(Callback);


