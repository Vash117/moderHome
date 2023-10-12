import { html, render } from "./node_modules/lit-html/lit-html.js";
const galleryPicArr = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
];

const galeryTemplate = () => html`
  <div class="header-gallery header-container"">
    <div>
      <h1>Галерия</h1>
    </div>
  </div>
  <section class="gallery" style="grid-template-rows: repeat(${Number(
    Math.ceil(galleryPicArr.length / 5)
  )}, 1fr)" @click=${setModalGalelery}>
    ${galleryPicArr.map((item) => galleryPicTemplate(item))}
    <div class='wraper-modal' @click=${closeModal}>
    <i class="fa-solid fa-circle-xmark close-galery"></i>
    <div class='gallery-modal'>
    <img src='./asets/gallery/1.jpg' />
    </div>
    </div>
  </section>
`;

const galleryPicTemplate = (item) => html` <div
  class="gal-pic"
  style="background-image:url(./asets/gallery/${item}.jpg)"
  data-id="${item}"
></div>`;

export default function renderGallery() {
  let result = galeryTemplate();
  return result;
}
function setModalGalelery(e) {
  if (e.target.tagName === "DIV" && e.target.dataset.id) {
    let galleryModal = document.querySelector(".wraper-modal");
    let modal = galleryModal.querySelector(".gallery-modal");
    let modalImage = modal.querySelector("img");
    galleryModal.style.display = "flex";
    modalImage.src = `./asets/gallery/${e.target.dataset.id}.jpg`;
  }
}
function closeModal(e) {
  let galleryModal = document.querySelector(".wraper-modal");
  galleryModal.style.display = "none";
}
