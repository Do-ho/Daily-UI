export default class SignupBoxHeader {
    constructor($target) {
      const header = document.createElement('div');
      header.className = "signupbox_header";
      header.innerHTML = "Sign Up";
      $target.appendChild(header);
    }
}