export default class Button {
    constructor($target) {
      const button = document.createElement('button');
      button.className = "button";
      button.innerHTML = "Sign Up";
      $target.appendChild(button);
    }
}