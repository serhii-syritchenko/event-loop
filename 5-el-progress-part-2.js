let i = 0;
const element = document.getElementById("progress");

function count() {
  // divide task (*)
  do {
    i++;
    progress.innerHTML = i;
  } while (i % 1e3 != 0);

  if (i < 1e6) {
    setTimeout(count);
  }
}

count();
// Element with progress in DOM updated each time after
// execution of sync code and create new macro-task
