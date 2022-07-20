import DonutMaker from "./DonutMaker.js"

const donutClicker = new DonutMaker();

runGame();
runAutoClicker();

function runGame() {
  setupAllButtons();
  updateAllCounts();
}

function setupAllButtons() {
  setupDonutButton();
  setupAutoClickerButton();
  setupMultiplierButton();
  setupResetButton();
}

function setupDonutButton() {
  const donutButton = document.querySelector("#donutButton");
  donutButton.addEventListener("click", () => {
    donutClicker.addDonut();
    updateAllCounts();
  });
}

function checkDonutCountToBuyAutoClicker() {
  const autoClickerButton = document.querySelector("#autoClickerBtn");
  if (donutClicker.notEnoughForAutoClickers()) {
    autoClickerButton.disabled = true;
  } else {
    autoClickerButton.disabled = false;
  }
}

function setupAutoClickerButton() {
  const autoClickerButton = document.querySelector("#autoClickerBtn");
  autoClickerButton.addEventListener("click", () => {
    donutClicker.purchaseAutoClicker();
    updateAllCounts();
    checkDonutCountToBuyAutoClicker();
  });
}

function checkDonutCountToBuyMultiplier() {
  const MultiplierButton = document.querySelector(
    "#multiplierBtn"
  );
  if (donutClicker.notEnoughForMultiplier()) {
    MultiplierButton.disabled = true;
  } else {
    MultiplierButton.disabled = false;
  }
}

function setupMultiplierButton() {
  const MultiplierButton = document.querySelector(
    "#multiplierBtn"
  );
  MultiplierButton.addEventListener("click", () => {
    donutClicker.purchaseMultiplier();
    updateAllCounts();
    checkDonutCountToBuyMultiplier();
  });
}

function setupResetButton() {
  const resetButton = document.querySelector("#reset-button");
  resetButton.addEventListener("click", () => {
    location.reload();
  });
}

function updateAllCounts() {
  updateDonutCount();
  updateAutoClickerCount();
  updateMultiplierCount();
  updateAutoClickerPrice();
  updateMultiplierPrice();
}

function updateDonutCount() {
  const donutCountSpan = document.querySelector("#donutCountDisplay");
  donutCountSpan.innerText = donutClicker.getClickCount();
  checkDonutCountToBuyAutoClicker();
  checkDonutCountToBuyMultiplier();
}

function updateAutoClickerCount() {
  const autoClickerCountSpan = document.querySelector("#autoClickerTotal");
  autoClickerCountSpan.innerText = donutClicker.getAutoClickerCount();
}

function updateMultiplierCount() {
  const multiplierCountSpan = document.querySelector(
    "#multiplierTotal"
  );
  multiplierCountSpan.innerText = donutClicker.getMultiplierCount();
}

function updateAutoClickerPrice() {
  const autoClickerPriceSpan = document.querySelector("#autoPrice");
  autoClickerPriceSpan.innerText = donutClicker.getAutoClickerCost().toFixed(1);
}

function updateMultiplierPrice() {
  const multiplierPriceSpan = document.querySelector("#clickMultiplierCost");
  multiplierPriceSpan.innerText = donutClicker
    .getMultiplierCost()
    .toFixed(1);
}

function runAutoClicker() {
  window.setInterval(() => {
    donutClicker.activateAutoClickers();
    updateAllCounts();
  }, 1000);
}

