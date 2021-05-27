import InputBox from './components/InputBox.js'

export default class App {
  constructor($target) {
    const inputBoxEl = new InputBox($target, "카드사");
  }
}
