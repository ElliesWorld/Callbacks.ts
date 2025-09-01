/*Simulate ordering pizza. 
The function should wait 3 seconds and then call the callback with 'Your pizza is ready!'. */

type orderStatusFunction = (message: string) => void;

const orderPizza = (orderStatus: orderStatusFunction): void => {
    console.log("Ordering Pizza.."),
        setTimeout(() => {
            const message = "Your Pizza is ready";
            orderStatus(message); // Call the callback to notify that pizza is ready
        }, 3000);
};

// This callback handles the pizza is ready message
const orderStatus = (message: string): void => {
    console.log(message);
};

// orderStatus is passed as the callback and it will be called when pizza is ready
orderPizza(orderStatus);