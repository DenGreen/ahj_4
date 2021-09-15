import CheckingNumber from './checkingNumber';
import Validation from './validation';

export default class interaction {
  constructor() {
    this.formControl = document.querySelector('.form-control');
    this.btn = document.querySelector('.btn');
    this.checkingNumber = new CheckingNumber();
    this.cardList = document.querySelectorAll('.card');
    this.validation = new Validation();
    this.card = Array.from(this.cardList);
  }

  eventAddInput() {
    this.formControl.addEventListener('input', () => {
      this.mapSearch(this.checkingNumber.checking(this.formControl.value));
    });
  }

  eventAddClick() {
    this.btn.addEventListener('click', (event) => {
      event.preventDefault();
      const valid = this.validation.luhnAlgorithm(this.formControl.value);
      if (!valid) {
        alert('Номер карты не верен');
      } else {
        alert('Номер действительный!');
      }

    });
  }

  mapSearch(cardIndex) {
    const card = Array.from(this.cardList);
    card.splice(cardIndex, 1);
    this.deletingMapClasses();
    if (cardIndex || cardIndex === 0) {
      card.forEach((value) => {
        value.classList.add('mask');
      });
    }
  }

  deletingMapClasses() {
    this.card.forEach((value) => {
      value.classList.remove('mask');
    });
  }
}
