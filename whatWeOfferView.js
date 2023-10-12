import { html, render } from "./node_modules/lit-html/lit-html.js";

const whatWeOfferSection = () => html`
  <section class="what-we-offer">
    <div class="main-offer">
      <div class="inner-offer">
        <h5>Достъпни цени</h5>
        <p>
          Достъпни цени, които ви позволяват да осъществите вашите идеи, без да
          натоварвате значително бюджета си.
        </p>
      </div>
      <div class="offer-line"></div>
      <i class="fa-solid fa-check" style="color:#67BAF2"></i>
    </div>
    <div class="main-offer">
      <div class="inner-offer">
        <h5>Бързи доставки</h5>
        <p>
          Гарантираме бързи доставки, за да ви предоставим желаните продукти в
          най-кратък срок.
        </p>
      </div>
      <div class="offer-line"></div>
      <i class="fa-solid fa-check" style="color:#3498DB"></i>
    </div>
    <div class="main-offer">
      <div class="inner-offer">
        <h5>Високо качество</h5>
        <p>
          Всеки продукт, който предлагаме, отговаря на най-високите стандарти на
          издръжливост и изпълнение.
        </p>
      </div>
      <div class="offer-line"></div>
      <i class="fa-solid fa-check" style="color:#1079BF"></i>
    </div>
  </section>
`;

export default function renderWhatWeOffer() {
  let result = whatWeOfferSection();
  return result;
}
