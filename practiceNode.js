
// Prints Hellow world plus the delay infiniteley 
const greeting = delay =>
    setTimeout(() => {
        console.log('Hello World. ' + delay);
        greeting(delay + 1);
    }, delay * 1000);

greeting(1);

// Prints out Hello world 5 times with the same delays and increments
// up 100ms every time
let lastIntervalId, counter = 5;

const greeting = delay => {
    if (counter === 5) {
        clearInterval(lastIntervalId);
        lastIntervalId = setInterval(() => {
            console.log(`Hello World. ${delay}`);
            greeting(delay + 100);
        }, delay);
        counter = 0;
    }
    counter += 1;
};

greeting(100);



