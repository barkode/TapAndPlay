// Game counts object
export const gameCounts = {
  counts: [],
  playerCards: [],
  dealerCards: [],
  playerName: '',

  getWinCount() {
    return this.counts[0];
  },

  setWinCount(newCount) {
    this.counts[0] = newCount;
  },

  getLoseCount() {
    return this.counts[1];
  },

  setLoseCount(newCount) {
    this.counts[1] = newCount;
  },

  resetCounts() {
    this.counts = [];
  },

  getPlayerSum() {
    const { playerCards } = this;
    const isAce = playerCards.map(({ card }) => card).includes('a');
    if (!isAce) {
      return playerCards.reduce((acc, el) => acc + el.value, 0);
    }
    return playerCards.reduce(
      (acc, { value }) => (value == 11 ? acc + 1 : acc + value),
      0
    );
  },

  getDealerSum() {
    const { dealerCards } = this;
    const isAce = dealerCards.map(({ card }) => card).includes('a');
    if (!isAce) {
      return dealerCards.reduce((acc, el) => acc + el.value, 0);
    }
    return dealerCards.reduce(
      (acc, { value }) => (value == 11 ? acc + 1 : acc + value),
      0
    );
  },

  getPlayerCards() {
    return this.playerCards;
  },

  setPlayerCard(newCard) {
    this.playerCards.push(newCard);
  },

  resetPlayerCards() {
    this.playerCards = [];
  },

  getDealerCards() {
    return this.dealerCards;
  },

  setDealerCard(newCard) {
    this.dealerCards.push(newCard);
  },

  resetDealerCards() {
    this.dealerCards = [];
  },

  getPlayerName() {
    return this.playerName;
  },

  setPlayerName(newName) {
    this.playerName = newName;
  },

  resetPlayerName() {
    this.playerName = '';
  },
};