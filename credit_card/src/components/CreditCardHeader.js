export default class CreditCardHeader {
    constructor($target) {
        const divEl = document.createElement('div');
        divEl.className = "creditcard-header";

        const cardImgEl = document.createElement('img');
        cardImgEl.src = "img/green_credit_card.png";
        cardImgEl.className = "creditcard-mainImg";

        const backCardImgEl1 = document.createElement('img');
        backCardImgEl1.src = "img/green_credit_card.png";
        backCardImgEl1.className = "creditcard-mainImg";

        const backCardImgEl2 = document.createElement('img');
        backCardImgEl2.src = "img/green_credit_card.png";
        backCardImgEl2.className = "creditcard-mainImg";

        divEl.appendChild(backCardImgEl1);
        divEl.appendChild(cardImgEl);
        divEl.appendChild(backCardImgEl2);

        $target.appendChild(divEl);
    }
}