/* Make a function called sayHelloLater that waits 2 seconds, 
then calls a callback with 'Hi, I am late!'. */

type callbackFunction = (message: string) => void;

const sayHelloLater = (callback: callbackFunction): void =>
{
    console.log(`waiting for 2 seconds...`);
    setTimeout(() => {
        const message = `Hi, I am late!`;
        callback(message);// Calling the callback with the late greeting message
    }, 2000);
}

// This callback shows the late greeting
const Callback: callbackFunction = (message: string) => {
    console.log(message);
};

// Callback is passed as the callback and it will be called after 2 seconds with the message
sayHelloLater(Callback);