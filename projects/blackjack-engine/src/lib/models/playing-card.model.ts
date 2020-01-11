export class PlayingCard {
  id: number;
  suit: string;
  // classicValue = used for the UI to render cards from 2 to 10, J,Q,K,A
  classicValue: number;
  // blackjackValue = for J,Q,K in blackjack the value is 10
  blackjackValue?: number;
  // special for ace which can have values 1 or 11
  isAce: boolean;
}
