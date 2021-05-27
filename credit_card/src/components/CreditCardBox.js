import CreditCardHeader from './CreditCardHeader.js';
import CreditCardBody from './CreditCardBody.js';

export default class CreditCardBox {
    constructor($target) {
        const sectionEl = document.createElement('section');
        sectionEl.className = "creditcard"

        $target.appendChild(sectionEl);

        const CreditCardBoxEl = $target.querySelector(".creditcard");
        const creditCardHeader = new CreditCardHeader(CreditCardBoxEl);
        const creditCardBody = new CreditCardBody(CreditCardBoxEl);
    }
}