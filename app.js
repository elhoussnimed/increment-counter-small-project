const numbers = document.querySelectorAll(".number");

window.addEventListener("load", () => {
  numbers.forEach((number) => {
    counter(number);
  });
});

function counter(number) {
  let counter = 0;
  let goal = number.dataset.number;

  const interval = setInterval(() => {
    counter += Math.floor(goal) / 50;

    number.innerHTML = counter.toFixed();

    if (counter.toString() === goal) {
      clearInterval(interval);
    }
  }, 10);
}
