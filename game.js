function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const player = document.querySelector("#player");
const coin = document.querySelector("#coin");
const counter = document.querySelector("#counter1");
let counterScore = 0;

window.addEventListener("keydown", function (e) {
  if (e.key == "ArrowDown") {
    moveVertical(player, +50);
  } else if (e.key == "ArrowUp") {
    moveVertical(player, -50);
  } else if (e.key == "ArrowRight") {
    moveHorizantal(player, 50);
    player.style.transform = "scale(1,1)";
  } else if (e.key == "ArrowLeft") {
    moveHorizantal(player, -50);
    player.style.transform = "scale(-1,1)";
  }
  if (isTouching(coin, player)) {
    counterIncrement();
    moveCoin();
  }
});
const moveVertical = (element, amount) => {
  const currTop = extractPos(element.style.top);
  player.style.top = `${currTop + amount}px`;
};
const moveHorizantal = (element, amount) => {
  const currleft = extractPos(element.style.left);
  player.style.left = `${currleft + amount}px`;
};

const extractPos = (pos) => {
  if (!pos) return 100;
  return parseInt(pos.slice(0, -2));
};
const moveCoin = () => {
  const height = Math.floor(Math.random() * window.innerHeight);
  const width = Math.floor(Math.random() * window.innerWidth);
  coin.style.left = `${width - 10}px`;
  coin.style.top = `${height - 10}px`;
};
const counterIncrement = () => {
  counterScore++;
  counter.textContent = `${counterScore} Coins`;
};
moveCoin();

