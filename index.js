//counter app

const countLabel = document.getElementById("countLabel");

const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");

let count = 0;

decreaseBtn.onclick = () => {
  count--;
  countLabel.textContent = count;
};
increaseBtn.onclick = () => {
  count++;
  countLabel.textContent = count;
};
resetBtn.onclick = () => {
  count = 0;
  countLabel.textContent = count;
};
