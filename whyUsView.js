import { html, render } from "./node_modules/lit-html/lit-html.js";
const whyUsTemplate = () => html`
 <section class="why-us">
        <div class="why-us-item image"></div>
        <div class="why-us-item what-we-do">
          <div class="main">
            <h3>Защо Modern House?</h3>
            <p>Предлагаме качествени продукти на изгодни цени с бърза доставка. Фирмата ни също така работи с индивидуални проекти каквито искате вие. Може да видите завършените ни проекти от галерия или от facebook страница ни със истински снимки!</p>
          </div>
          <div>
            <h4>Какво правим?</h2>
              <div>                
                <i class="fa-solid fa-clipboard-list" style="margin-right: 0.8rem;"></i>
                <div>
                  <h5>Производство на строителни елементи</h5>
                  <p>Модерн Хаус ООД. е партньор за решения на повече от 200 компании за сглобяеми и леки стоманени конструкции, работещи в сектора.</p>
                </div>
              </div>
            <div>
              <i class="fa-regular fa-chart-bar"></i>
             <div>
              <h5>Модерни решения за жилищни сгради</h5>
              <p>Нашата компания се е доказала в областта на много различни видове строителство като изпълнява целия процес от етапа на проектиране до предаването на обекта на клиента.</p>
             </div>
            </div>
            <div>
              <i class="fa-solid fa-chart-line"></i>
              <div>
                <h5>Решения за мобилни конструкции</h5>
                <p>За кратко време Модерн Хаус ООД. си спечели престижно място в сектора с важни проекти, за които сключи договори както в България, така и в чужбина.</p>
            </div>  
          </div>
        </div>
      </div>
        <div class="why-us-item small"></div>
        <div class="why-us-item big"></div>
      </section >     
 `;

export default function renderWhyUs() {
  let result = whyUsTemplate();
  return result;
}
