export default class InputBox {
    constructor($target, title) {
        const groupEl = document.createElement('div');
        groupEl.className = "inputBox-group";

        const labelEl = document.createElement('label');
        labelEl.innerHTML = title;
        const inputEl = document.createElement('input');

        groupEl.appendChild(inputEl);
        groupEl.appendChild(labelEl);
        $target.appendChild(groupEl);
    }
}