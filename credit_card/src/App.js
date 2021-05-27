import InfoBox from './components/InfoBox.js';
import CreditCardBox from './components/CreditCardBox.js';

export default class App {
  constructor($target) {
    const infoBox = new InfoBox($target);
    const creditCardBox2 = new CreditCardBox($target);
  }
}
