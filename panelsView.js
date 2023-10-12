import { html, render } from "./node_modules/lit-html/lit-html.js";

const panelsTemplate = () => html` <div class="header-container panels">
    <div>
      <h1>Панели</h1>
    </div>
  </div>
  <section class="panels-main">
    <div class="panels-container">
      <img src="./asets/wallPanels/panels.png" alt="" />
      <p>
        Предоставяме възможността да закупите нашите стенни панели като отделен
        артикул. Не се колебайте да се свържете с нас днес, за да научите повече
        за нашите стенни панели и как те могат да трансформират вашето
        пространство.Нашият екип от специалисти е готов да ви съдейства със
        съвети и помощ.
      </p>
      <a href="#contacts">Свържи се с нас</a>
    </div>
  </section>`;

export default function renderPannels() {
  let result = panelsTemplate();
  return result;
}
