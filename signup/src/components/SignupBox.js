import SignupBoxHeader from './SignupBoxHeader.js';
import SignupBoxBody from './SignupBoxBody.js';

export default class SignupBox {
    constructor($target) {
      const whiteBox = document.createElement('div');
      whiteBox.className = "signupbox";
      $target.appendChild(whiteBox);

      const boxEl = $target.querySelector('.signupbox');
      const header = new SignupBoxHeader(boxEl)
      const body = new SignupBoxBody(boxEl)
    }
}