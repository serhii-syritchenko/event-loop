let i = 0;
let start = Date.now();

function count() {
  // part of hard counting (*)
  do {
    i++;
  } while (i % 1e6 != 0);

  if (i == 1e9) {
    // Sync code (wait to execution of hard counting)
    console.log("Done in " + (Date.now() - start) + "ms");
  } else {
    // Create new macro-task
    setTimeout(count); // create new call (**)
  }
}

count();
