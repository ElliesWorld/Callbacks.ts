//Make a function that takes a callback and calls it three times with different messages.

type messagesFunction = (message: string) => void;

const multipleMessages = (callback: messagesFunction): void => {
    console.log("Waiting for messages.."),
        setTimeout(() => {
            const message = "Your first Message";
            callback(message); // Call the callback with the message after 1 second
        }, 1000);
    setTimeout(() => {
            const message = "Your Second Message";
            callback(message);// -"-
    }, 2000);
    setTimeout(() => {
            const message = "Your third Message";
            callback(message);// -"-
        }, 3000);
    
};

// This callback takes care of each message as it comes
const messages: messagesFunction = (message: string) => {
  console.log(message);
};

// The callback is passed and will be called 3 times with different messages at different times
multipleMessages(messages);