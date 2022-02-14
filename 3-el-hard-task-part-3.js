let i = 0;
let start = Date.now();

function count() {
  // move condition of new call to top for optimization
  if (i < 1e9 - 1e6) {
    // Create new macro-task
    setTimeout(count);
  }

  do {
    i++;
  } while (i % 1e6 != 0);

  if (i == 1e9) {
    console.log("Done in " + (Date.now() - start) + "ms");
  }
}

count();
