class DonutMaker {
  constructor() {
    this.donutCount = 0;
    this.MultiplierCount = 0;
    this.MultiplierCost = 10;
    this.autoClickerCount = 0;
    this.autoClickerCost = 100;
  }
  
  
  calculateMultiplierValue() {
    return Math.pow(1.2, this.MultiplierCount);
  }
  
  addDonut() {
    this.donutCount += 1 * this.calculateMultiplierValue();
  }

  getClickCount() {
    return Math.round(this.donutCount);
  }

  getMultiplierCount() {
    return this.MultiplierCount;
  }

  getMultiplierCost() {
    return this.MultiplierCost;
  }

  getAutoClickerCount() {
    return this.autoClickerCount;
  }

  getAutoClickerCost() {
    return this.autoClickerCost;
  }

  subtractAutoClickerCostFromDonutCount() {
    this.donutCount -= Math.round(this.autoClickerCost);
  }
  
  increaseAutoClickerCost() {
    this.autoClickerCost += this.autoClickerCost * 0.1;
  }
  
  purchaseAutoClicker() {
    this.autoClickerCount += 1;
    this.subtractAutoClickerCostFromDonutCount();
    this.increaseAutoClickerCost();
  }

  notEnoughForAutoClickers() {
    return this.donutCount < this.autoClickerCost;
  }

  checkDonutCountToBuyAutoClicker() {
    if (this.notEnoughForAutoClickers()) {
      throw new Error("Not enough donuts to purchase.");
    } else {
      this.purchaseAutoClicker();
    }
  }

  activateAutoClickers() {
    for (let i = 0; i < this.autoClickerCount; i++) {
      this.addDonut();
    }
  }

  subtractMultiplierCostFromDonutCount() {
    this.donutCount -= Math.round(this.MultiplierCost);
  }

  increaseMultiplierCost() {
    this.MultiplierCost += this.MultiplierCost * 0.1;
  }
  
  purchaseMultiplier() {
    this.MultiplierCount += 1;
    this.subtractMultiplierCostFromDonutCount();
    this.increaseMultiplierCost();
  }

  notEnoughForMultiplier() {
    return this.donutCount < this.MultiplierCost;
  }

  checkDonutCountToBuyMultiplier() {
    if (this.notEnoughForMultiplier) {
      throw new Error("Not enough donuts to purchase.");
    } else {
      this.purchaseMultiplier;
    }
  }
}

export default DonutMaker;