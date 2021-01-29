export default class checkingNumber {
  checking(number) {
    let cardIndex = null;

    switch (number) {
      case 34:
        cardIndex = 0;
        break;
      case 6011:
        cardIndex = 1;
        break;
      case 3528:
        cardIndex = 2;
        break;
      case 5018:
        cardIndex = 3;
        break;
      case 51:
        cardIndex = 4;
        break;
      case 4:
        cardIndex = 5;
        break;
      case 4026:
        cardIndex = 6;
        break;
      case 2:
        cardIndex = 7;
        break;
      default:
        cardIndex = null;
        break;
    }

    return cardIndex;
  }
}
