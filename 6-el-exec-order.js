setTimeout(() => console.log("timeout-first")); // Create new macro-task
setTimeout(() => console.log("timeout-second"), 1000); // Create new macro-task

Promise.resolve().then(() => console.log("promise-first")); // Create new micro-task

// Create new micro-task
const promise = new Promise((resolve) => {
  resolve();
  console.log("resolve"); // sync code
});

// Exec (promise) micro-task
promise.then(() => {
  console.log("promise-second"); // Sync code after after execution of promise

  setTimeout(() => {
    console.log("promise-timeout"); // Create new macro-task after execution of promise
  });
});

setTimeout(() => console.log("timeout-third")); // Create new macro-task

queueMicrotask(() => console.log("queueMicrotask")); // Create new micro-task

// Sync code (async function without promise behave as a simple function)
async function asyncFunc() {
  await console.log("asyncFunc");
}

asyncFunc(); // exec of function

console.log("code"); // sync code

/* Console log result */
// 1 - resolve
// 2 - asyncFunc
// 3 - code
// 4 - promise-first
// 5 - promise-second
// 6 - queueMicrotask
// 7 - timeout-first
// 8 - timeout-third
// 9 - promise-timeout
// 10 - timeout-second
