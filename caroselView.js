import { html, render } from "./node_modules/lit-html/lit-html.js";
import renderCompanyInfo from "./companyInfo.js";
import renderWhyUs from "./whyUsView.js";
import renderWhatWeOffer from "./whatWeOfferView.js";
import renderMainGalery from "./mainGaleryView.js";
let caroselIdStart = 0;
export const partnersArr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];

const backgrounds = [
  {
    image: "./asets/carosel/containers.webp",
    text: "Използвайте нашите контейнери за да реализирате вашите идеи за жилището и бизнеса.",
    title: "КОНТЕЙНЕРИ",
    link: "#containers",
  },

  {
    image: "./asets/carosel/construction.webp",
    text: "Нашият избор от стоманени къщи предлага надеждност и здравина, гарантирайки ви дълготрайно и издръжливо жилище, което ще устои на изискванията на времето.",
    title: "СТОМАНЕНИ КЪЩИ",
    link: "#steel-houses",
  },
  {
    image: "./asets/carosel/house.webp",
    text: "С нашите сглобяеми къщи можете бързо и лесно да създадете уютен и функционален дом, който отговаря на вашите нужди.",
    title: "СГЛОБЯЕМИ КЪЩИ",
    link: "#houses",
  },
  {
    image: "./asets/carosel/ranel.webp",
    text: "Панелите ни се отличават с високо качество, предоставяйки ви ефективно решение за модерно облагородяване на вашия дом или бизнес обект.",
    title: "ПАНЕЛИ",
    link: "#panels",
  },
];
const root = document.getElementById("root");
const caroselTemplate = (data) => html`<div class="corosel-container">
    ${data.map((item, index) => singleCarosel(item, index))}

    <div class="carosel-buttons-container"></div>
    <div @click=${setNextImage} class="controls">
      ${data.map((item, index) => setControl(item, index))}
    </div>
    <button @click=${prevImage} class="botton left">
      <i class="fa-solid fa-chevron-left"></i>
    </button>
    <button @click=${nextImage} class="botton right">
      <i class="fa-solid fa-chevron-right"></i>
    </button>
  </div>
  ${renderCompanyInfo()} ${renderWhyUs()} ${renderWhatWeOffer()}
  ${renderMainGalery(partnersArr)}`;

const singleCarosel = (item, id) => html`<div
  class="carosel ${id > 0 ? "move-in" : ""}"
  style="background-image:url(${item.image})"
  data-id=${id}
>
  <div class="info-container">
    <h2>${item.title}</h2>
    <p>${item.text}</p>
    <a href=${item.link}>Разбери повече ></a>
  </div>
</div>`;

const setControl = (item, index) =>
  html`<div
    class="control ${index === 0 ? "active" : ""} "
    data-id=${index}
  ></div>`;

function nextImage(e) {
  let curentItemId = caroselIdStart;
  let nextId = curentItemId + 1;
  caroselIdStart++;
  let caroselItemsArr = Array.from(root.querySelectorAll(".carosel"));
  caroselItemsArr.forEach((item) => item.classList.add("move-in"));
  if (nextId >= caroselItemsArr.length) {
    nextId = 0;
    caroselIdStart = 0;
  }
  let curentItem = caroselItemsArr[curentItemId];
  let nextItem = caroselItemsArr[nextId];
  curentItem.classList.add("move-in");
  nextItem.classList.remove("move-in");

  setCaroselActiveControl(nextId);
}
function prevImage(e) {
  let curentItemId = caroselIdStart;
  let nextId = curentItemId - 1;
  let caroselItemsArr = Array.from(root.querySelectorAll(".carosel"));
  if (nextId < 0) {
    nextId = caroselItemsArr.length - 1;
    caroselIdStart = caroselItemsArr.length;
  }
  let curentItem = caroselItemsArr[curentItemId];
  let nextItem = caroselItemsArr[nextId];
  curentItem.classList.add("move-in");
  nextItem.classList.remove("move-in");
  caroselIdStart--;
  setCaroselActiveControl(nextId);
}

function setCaroselActiveControl(id) {
  let controlsArr = Array.from(root.querySelectorAll(".control"));
  controlsArr.map((control) => control.classList.remove("active"));
  if (!id) return;
  controlsArr[id].classList.add("active");
}

function setNextImage(e) {
  if (e.target.tagName === "DIV" && !e.target.classList.contains("active")) {
    let btnId = e.target.dataset.id;
    setCaroselActiveControl(btnId);
    let caroselItemsArr = Array.from(root.querySelectorAll(".carosel"));
    caroselItemsArr.forEach((carosel) => carosel.classList.add("move-in"));
    caroselItemsArr[btnId].classList.remove("move-in");
    caroselIdStart = btnId;
  }
}

function timedCaroselChange() {
  let caroselItemsArr = Array.from(root.querySelectorAll(".carosel"));
  let curentId = caroselIdStart;
  curentId++;
  if (curentId >= caroselItemsArr.length) {
    curentId = 0;
  }
  setCaroselActiveControl(curentId);
  if (!curentId) return;
  caroselItemsArr.forEach((carosel) => carosel.classList.add("move-in"));
  caroselItemsArr[curentId].classList.remove("move-in");
  caroselIdStart = curentId;
}

export let idInterval = setInterval(timedCaroselChange, 8000);

export default function renderCarosel() {
  const result = caroselTemplate(backgrounds);
  return result;
}
