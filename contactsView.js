import { html, render } from "./node_modules/lit-html/lit-html.js";
import { partnersArr } from "./caroselView.js";
import renderMainGalery from "./mainGaleryView.js";
const contactsVeiwTemplate = () => html`
  <section class="contacts">
    <div class="contacts-inner">
      <div class="contacts-form">
        <form action="https://submit-form.com/HRKZbYxa">
          <h3>Бързо запитване</h3>
          <input type="text" name="name" placeholder="Име *" required />
          <input type="email" name="email" placeholder="Email *" required />
          <input type="text" name="phone" placeholder="Телефон *" required />
          <textarea
            name="message"
            rows="4"
            placeholder="Опишете вашето запитване към нас.."
          ></textarea>
          <button type="submit">Изпрати запитване</button>
        </form>
      </div>

      <div class="contacts-info">
        <h3>Център продажби</h3>
        <ul>
          <li>
            <i class="fa-solid fa-phone-volume"></i
            >
            <a href="tel:+359899863329">+359 899 86 33 29</a>           
          </li>
          <li>
            <i class="fa-solid fa-phone-volume"></i
            ><a href="tel:+359876711744">+359 876 71 17 44</a>
          </li>
          <li>
          <i class="fa-solid fa-phone-volume"></i
          >
          <a href="tel:+359878789021">+359 878 78 09 21</a>           
        </li>
          <li>
            <i class="fa-solid fa-envelope"></i
            ><a href="mailto:office@modernhouse.bg">office@modernhouse.bg</a>
          </li>
          <li>
          <a href="https://maps.app.goo.gl/WLiiVLf13SujLUkV9" target="_blank"><i class="fa-solid fa-location-dot"></i>изхода на с. Труд 
          </li>
          </a>
          <li><i class="fa-regular fa-clock"></i>9:00 AM - 18:00 PM</li>
        </ul>
      </div>
    </div>
  </section>
  ${renderMainGalery(partnersArr)}
`;

export default function renderContacts() {
  let result = contactsVeiwTemplate();
  return result;
}
