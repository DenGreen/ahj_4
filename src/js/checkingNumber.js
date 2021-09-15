export default class checkingNumber {
  checking(number) {
    let cardIndex = null;
    
    if (number.startsWith("34")) {
      cardIndex = 0;
    } else if (number.startsWith("6011")) {
      cardIndex = 1;
    } else if (number.startsWith("3528")) {
      cardIndex = 2;
    } else if (number.startsWith("5018")) {
      cardIndex = 3;
    } else if (number.startsWith("51")) {
      cardIndex = 4;
    } else if (number.startsWith("4026")) {
      cardIndex = 6;
    } else if (number.startsWith("2")) {
      cardIndex = 7;
    } else if (number.startsWith("4")) {
      cardIndex = 5;
    } 
    return cardIndex;
  }
}
