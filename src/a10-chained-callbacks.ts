/*Make three functions that each wait 1 second and then call the next callback,
 printing 'Step 1 done', 'Step 2 done', 'Step 3 done' in order. */

type callbackFunction = () => void;

const stepOne = (callback: callbackFunction): void => {
    setTimeout(() => {
        console.log("Step 1 done");
        callback();// Calls the function passed in - triggers stepTwo
    }, 1000);
};

const stepTwo = (callback: callbackFunction): void => {
    setTimeout(() => {
        console.log("Step 2 done");
        callback();// Calls the function passed in - triggers stepThree
    }, 1000);
};

const stepThree = (callback: callbackFunction): void => {
    setTimeout(() => {
        console.log("Step 3 done");
        callback();// Calls the function passed in - prints completion message
    }, 1000);
};

// These arrow functions are the callbacks for each step
stepOne(() => { 
    stepTwo(() => {
        stepThree(() => {
            console.log("All steps are completed!");
        });
    });
});