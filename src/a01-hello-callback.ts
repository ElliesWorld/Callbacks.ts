//Write a function that takes a callback and 
// calls it with 'Hello from callback!'.

type callbackFunction = (message: string) => void;

const HelloFromCallback = (callback: callbackFunction): void => {
  console.log(`waiting for 2 seconds...`);
  setTimeout(() => {
    const message = `Hello from Callback!`;
    callback(message);// Calling the callback with the message
  }, 2000);
};

// This callback shows the message
const Callback: callbackFunction = (message: string) => {
  console.log(message);
};

// Passing Callback as the callback and it will be called after 2 seconds with the message
HelloFromCallback(Callback);
