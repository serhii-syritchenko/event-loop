const {
  of,
  merge,
  asapScheduler,
  asyncScheduler,
  queueScheduler,
  animationFrameScheduler,
} = rxjs;
const { observeOn } = rxjs.operators;

const async$ = of("asyncScheduler").pipe(observeOn(asyncScheduler)); // create macro-task
const asap$ = of("asapScheduler").pipe(observeOn(asapScheduler)); // create micro-task
const queue$ = of("queueScheduler").pipe(observeOn(queueScheduler)); // async code
const animationFrame$ = of("animationFrameScheduler").pipe(
  observeOn(animationFrameScheduler)
); // render dom
merge(async$, asap$, queue$, animationFrame$).subscribe(console.log);

console.log("synchronous code"); // sync code

// 1 - queueScheduler
// 2 - synchronous code
// 3 - asapScheduler
// 4 - animationFrameScheduler
// 5 - asyncScheduler
