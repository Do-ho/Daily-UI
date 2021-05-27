export default class CreditCardBody {
    constructor($target) {
        const divEl = document.createElement('div');
        divEl.className = "creditcard-body";

        // Name
        const nameWrapDiv = document.createElement('div');
        nameWrapDiv.className = 'flex_container';

        const nameTitle = document.createElement('span');
        nameTitle.className = 'creditcard-body_title'
        nameTitle.innerHTML = "Name";

        nameWrapDiv.appendChild(nameTitle);

        const nameInputEl = document.createElement('input');
        nameInputEl.className = 'main_input name_input';

        nameWrapDiv.appendChild(nameInputEl);

        divEl.appendChild(nameWrapDiv);

        // Number
        const numberTitleWrapDiv = document.createElement('div');
        numberTitleWrapDiv.className = 'flex_container';

        const numberDivTitle = document.createElement('span');
        numberDivTitle.className = 'creditcard-body_title margin-35'
        numberDivTitle.innerHTML = "Card Number";

        numberTitleWrapDiv.appendChild(numberDivTitle);
        divEl.appendChild(numberTitleWrapDiv);

        const numberDivEl = document.createElement('div');
        numberDivEl.className = 'creditcard-body_numberwrap';

        for (let i=0; i<4; i++) {
            const numberInputEl = document.createElement('input');
            numberInputEl.className = "main_input"
            numberInputEl.maxLength = 4;
            if(i>1) numberInputEl.type = "password";
            numberDivEl.appendChild(numberInputEl);
        }

        divEl.appendChild(numberDivEl);

        // Date, CVV
        const datecvvEl = document.createElement('div');
        datecvvEl.className = 'date-cvv-wrap';

        const dateEl = document. createElement('div');
        dateEl.className = 'date-wrap';

        const dateTitle = document.createElement('span');
        dateTitle.className = 'creditcard-body_title'
        dateTitle.innerHTML = "Expiration Date";

        dateEl.appendChild(dateTitle);

        const dateInputWrapEl = document.createElement('div');
        dateInputWrapEl.className = 'date_wrap_inputwrap';

        const monthInputEl = document.createElement('input');
        monthInputEl.className = 'sub_input';
        monthInputEl.placeholder = 'MM';
        monthInputEl.maxLength = 2;

        const yearInputEl = document.createElement('input');
        yearInputEl.className = 'sub_input';
        yearInputEl.placeholder = 'YY';
        yearInputEl.maxLength = 2;

        const divideEl = document.createElement('span');
        divideEl.innerHTML = '/';

        dateInputWrapEl.appendChild(monthInputEl);
        dateInputWrapEl.appendChild(divideEl);
        dateInputWrapEl.appendChild(yearInputEl);

        dateEl.appendChild(dateInputWrapEl);

        const cvvEl = document.createElement('div');
        cvvEl.className = 'cvv-wrap';

        const cvvTitle = document.createElement('span');
        cvvTitle.className = 'creditcard-body_title'
        cvvTitle.innerHTML = "CVV";

        cvvEl.appendChild(cvvTitle);

        const cvvInput = document.createElement('input');
        cvvInput.className = 'main_input cvv_input';
        cvvInput.type = 'password';
        cvvInput.placeholder = "CVV";
        cvvInput.maxLength = 3;

        cvvEl.appendChild(cvvInput);

        datecvvEl.appendChild(dateEl);
        datecvvEl.appendChild(cvvEl);
        divEl.appendChild(datecvvEl);

        // Button
        const buttonEl = document.createElement('button');
        buttonEl.className = 'submit_button';
        buttonEl.innerHTML = "Pay Now"

        divEl.appendChild(buttonEl);

        $target.appendChild(divEl);
    }
}