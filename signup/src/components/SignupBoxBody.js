import InfoBox from './InfoBox.js';
import Button from './Button.js';

export default class SignupBoxBody {
    constructor($target) {
      const body = document.createElement('div');
      body.className = "signupbox_body";
      $target.appendChild(body);

      const bodyEl = $target.querySelector('.signupbox_body');
      const EmailInfoBox = new InfoBox(bodyEl, "Email");
      const PasswordInfoBox = new InfoBox(bodyEl, "Password");

      // Button Container
      const buttonContainer = document.createElement('div');
      buttonContainer.className = "button_container";
      bodyEl.appendChild(buttonContainer);

      const buttonContainerEl = $target.querySelector('.button_container');
      const button = new Button(buttonContainerEl);
    }
}