import storage from './storage.js';

const gameEndHTML = (name) => `
    <div class="game-container">
      <h3>Lo conseguiste!</h3>
      <section class="section-area">
        <p class="story-p">
          Corres hacia el balcón y te reencuentras con tu humano, y con todos tus vecinos. 
          Son las 20.00h y no quieres perder la ocasión de aplaudir, como cada día. Solo que 
          hoy es diferente.
        </p>
        <p class="story-p">
          Hoy dedicas ese aplauso, a sanitarios, policías, farmacéuticos… Nuestros héroes de 
          primera línea. Pero también a todos los empleados de supermercado, transportistas, 
          repartidores, trabajadores de residencias… A todos los héroes anónimos.
        </p> 
      </section>

      <div class="section-img">
        <img
            srcset="./img/final/Balcon-600w.png 600w, 
                  ./img/final/Balcon-1200w.png 1200w,
                  ./img/final/Balcon-1800w.png 1800w"
            src="./img/final/Balcon-12000w.png"
            alt="a los balcones"
          />
      </div>

      <section class="section-area">
        <p class="story-p">
          Y hoy, también nosotros, nos unimos a este aplauso, y se lo dedicamos a nuestros 
          cocineros, repartidores, a los que preparan cada paquete de Frankie con el máximo 
          cariño y cuidado, y a vosotros, nuestra #FrankieFamily, por confiar en nosotros 
          para darle lo mejor a vuestros perretes.”
        </p>
        <p> Y a ti, queremos felicitarte por haber resuelto el misterio y por encontrar “La 
        receta perfecta”. Y como todo ganador, mereces un premio.
        </p> 
      </section>
      <section class="navigation">
        
        <button id="next-btn" class="primary-btn want-price-btn">Quiero mi premio!</button>
      </section>
    </div>
  `;

const printGameEnd = () => {
  const { getItem } = storage('lStorage');
  const name = getItem('name');
  const mainContainer = document.getElementById('main');
  mainContainer.innerHTML = gameEndHTML(name);

  const nextBtn = document.getElementById('next-btn');
  nextBtn.addEventListener('click', () => {
    page('/premio');
  });

  const backBtn = document.getElementById('back-btn');
  backBtn.addEventListener('click', () => window.history.back());
};

export default printGameEnd;
