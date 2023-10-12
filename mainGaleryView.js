import { html, render } from "./node_modules/lit-html/lit-html.js";

const mainGaleryTemplate = (arr) => html`
  <section class="main-galery">
    <h2>част от нашите партньори и клиенти</h2>
    <div class="wrapper">${arr.map((item) => partnerImage(item))}</div>
  </section>
`;

const partnerImage = (item) => html`
  <img src="./asets/Sponsors/${item}.webp" alt="partner's logo" />
`;

export default function renderMainGalery(partners) {
  let result = mainGaleryTemplate(partners);
  return result;
}
