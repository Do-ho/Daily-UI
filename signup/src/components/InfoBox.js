export default class InfoBox {
    constructor($target, title) {
      const infoBoxEl = document.createElement('div');
      infoBoxEl.className = "infobox";
      
      // Title
      const titleEl = document.createElement('p');
      titleEl.className = "infobox_title";
      titleEl.innerHTML = title;
      infoBoxEl.appendChild(titleEl);

      // InputWrap
      const InputWrap = document.createElement('div');
      InputWrap.className = "infobox_inputwrap";

      // InputWrapIconBox
      const InputWrapIconBox = document.createElement('div');
      InputWrapIconBox.className = `infobox_inputwrap_iconbox ${title.toLowerCase()}_icon`;
      InputWrap.appendChild(InputWrapIconBox)

      // InputBox
      const InputBox = document.createElement('input');
      InputBox.className = "infobox_inputwrap_inputbox";
      InputBox.placeholder = `Input your ${title}`;
      InputWrap.appendChild(InputBox);

      infoBoxEl.appendChild(InputWrap);
      $target.appendChild(infoBoxEl);
    }
}