import { Injectable } from '@angular/core';

@Injectable()
export class CardProviderService {
  cards: string[] = []

  setCards(cards) {
    this.cards = cards;
  }

  getCards() {
    return this.cards;
  }

  destroyCards() {
    this.cards = [];
  }
}
