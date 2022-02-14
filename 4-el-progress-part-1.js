function count() {
  const element = document.getElementById("progress");

  for (let i = 0; i < 1e6; i++) {
    i++;
    element.innerHTML = i;
  }
}

count();

// Element with progress in DOM updated only after execution of sync code
