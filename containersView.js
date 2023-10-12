import { html, render } from "./node_modules/lit-html/lit-html.js";
import idInterval from "./caroselView.js";

const containersArr = [
  "SH 001",
  "SH 002",
  "SH 003",
  "SH 004",
  "SH 005",
  "SH 008",
];
const containersView = () => html`
  <div class="header-container">
    <div>
      <h1>Контейнери</h1>
    </div>
  </div>
  <section class="containers">
    ${containersArr.map((item) => singleContainer(item))}
  </section>
  <section class="calapsable-containers">
    <div class="top">
      <div class="calapsable-inner">
        <div class="replace-image">
          <img src="./asets/panels/container-house-details@2x.png" alt="" />
        </div>
        <div class="text-holder">
          <h3>Разглобяеми контейнери</h3>
          <p>
            Ако се налага да поставите контейнер на трудно достъпен терен,
            нашата компания предлага иновативно и ефективно решение. С нашите
            модулни контейнери, можем да ви предоставим възможността да
            транспортирате контейнера до мястото, където е необходим, и да го
            сглобите на място. Този метод на доставка и монтаж се осъществява с
            минимално усилие и възможно най-кратък срок, без значение за колко
            отдалечен и недостъпен е теренът.
          </p>
        </div>
      </div>
    </div>
    <div class="separator"></div>
    <div class="bottom">
      <div class="calapsable-inner">
        <div class="text-holder">
          <p>
            Ако се налага да поставите контейнер на трудно достъпен терен,
            нашата компания предлага иновативно и ефективно решение. С нашите
            модулни контейнери, можем да ви предоставим възможността да
            транспортирате контейнера до мястото, където е необходим, и да го
            сглобите на място. Този метод на доставка и монтаж се осъществява с
            минимално усилие и възможно най-кратък срок, без значение за колко
            отдалечен и недостъпен е теренът.
          </p>
        </div>
        <div class="replace-image">
          <img src="./asets/panels/Group 447@2x.png" alt="" />
        </div>
      </div>
    </div>
    <div class="container-footer">
      <div class="c-footer-inner">
        <img src="./asets/panels/Mask Group 2@2x.png" alt="" />
        <p>
          Kомпанията ни произвежда широка гама контейнери от стандартен тип до
          контейнерни къщи с различни размери. Нашите продукти се произвеждат
          като заварени и разглобени. Модерн Хаус ООД. не прави компромис със
          стандартите за качество от материалите до фината изработка и
          предоставя услуги по проектиране за специални проекти и зони за
          лагери. Компанията ни има голям опит в монтажа и демонтажа на
          строителни обекти. За кратко време тя си спечели уважавано място в
          сектора с подписаните договори както в България, така и в чужбина.
        </p>
      </div>
    </div>
    <div class='modal' @click=${closeModal}>
    <i class="fa-solid fa-circle-xmark close-galery"></i>
    <div class='inner-modal'>
      <img />
    </div>
    </div
  </section>
`;
const singleContainer = (data) => html`
  <div
    class="single-container"
    @click=${setModal}
    data-id=${data.split(" ").join("")}
  >
    <img src="./asets/panels/${data.split(" ").join("")}.webp" alt="" />
    <h3>${data}</h3>
  </div>
`;

function setModal(e) {
  let img = this.querySelector("img");
  const modal = document.querySelector(".modal");
  modal.style.display = "flex";
  const modalImg = modal.querySelector("img");
  modalImg.src = img.src;
}

function closeModal(e) {
  this.style.display = "none";
}

export default function renderCarosel() {
  clearInterval(idInterval);
  let result = containersView();
  return result;
}
