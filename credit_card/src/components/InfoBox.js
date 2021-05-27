import InputBox from './InputBox.js'

export default class InfoBox {
    constructor($target) {
        const sectionEl = document.createElement('section');

        const logoImgEl = document.createElement('img');
        logoImgEl.src = "img/logo.png";
        logoImgEl.className = "infobox-logo";

        sectionEl.appendChild(logoImgEl);

        const watermelonImgEl = document.createElement('img');
        watermelonImgEl.src = "img/watermelon.png";
        watermelonImgEl.className = "infobox-mainImg";
        
        sectionEl.appendChild(watermelonImgEl);

        $target.appendChild(sectionEl);
    }
}