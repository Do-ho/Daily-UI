import SignupBox from './components/SignupBox.js';

export default class App {
  constructor($target) {
    const signupboxEl = new SignupBox($target);
  }

  init = () => {}
}
