let i = 0;
let start = Date.now();

// Create new macro-task
setTimeout(() => {
  console.log("Timeout in " + (Date.now() - start) + "ms");
}, 1000);

// Create new micro-task
Promise.resolve().then(() => {
  console.log("promise");
});

function count() {
  // hard counting
  for (let j = 0; j < 1e9; j++) {
    i++;
  }

  // Sync code (wait to execution of hard counting)
  console.log("Done in " + (Date.now() - start) + "ms");
}

count();

/* Console log result */
// 1 - Done in ~2000ms
// 2 - promise
// 3 - Timeout in ~2010ms
