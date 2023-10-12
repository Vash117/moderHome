import { html, render } from "./node_modules/lit-html/lit-html.js";

let companyTemplate = () => html` <section class="company-info">
  <div>
    <i class="fa-solid fa-people-group"></i>
    <p>10</p>
    <p>Екип</p>
  </div>
  <div class="seperation-line"></div>
  <div>
    <i class="fa-regular fa-calendar-check"></i>
    <p>30</p>
    <p>Дни Срок Доставка</p>
  </div>
  <div class="seperation-line"></div>
  <div>
    <i class="fa-solid fa-trophy"></i>
    <p>100 +</p>
    <p>Завършени Проекта</p>
  </div>
  <div class="seperation-line"></div>
  <div>
    <i class="fa-regular fa-face-smile"></i>
    <p>150 +</p>
    <p>Доволни Клиенти</p>
  </div>
</section>`;

export default function renderCompanyInfo() {
  let result = companyTemplate();
  return result;
}
