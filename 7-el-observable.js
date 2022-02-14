const { Observable, of } = rxjs;

// Create new macro-task
setTimeout(() => {
  console.log("timeout"); // 10
});

// Create new micro-task
Promise.resolve().then(() => {
  console.log("promise-one"); // 7
});

console.log("code-one"); // sync code

// Create new macro-task
const promise = new Promise((resolve) => {
  resolve();
  console.log("resolve"); // sync coe
});

// Exec promise
promise.then(() => {
  console.log("promise-two");
});

// Create new observable (sync code)
const stream = new Observable((subscriber) => {
  console.log("observable"); // sync code
  subscriber.next();
});

// sync code
stream.subscribe(() => {
  console.log("subscribe");
});

console.log("code-two"); // sync code

// 'of' is empty and it won't execute
of().subscribe(() => {
  console.log("of-subscribe"); // sync code
});

// Create new micro-task
Promise.resolve().then(() => {
  console.log("promise-three");
});

// 1 - code-one
// 2 - resolve
// 3 - observable
// 4 - subscribe
// 5 - code-two
// 6 - promise-one
// 7 - promise-two
// 8 - promise-three
// 9 - timeout
