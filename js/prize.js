import storage from './storage.js';

const priceHTML = (name) => `
    <div class="game-container">
      <h3>TU PREMIO</h3>
      <section class="section-area">
        <p class="story-p">
          Corres hacia el balcón y te reencuentras con tu humano, y con todos tus vecinos. 
          Son las 20.00h y no quieres perder la ocasión de aplaudir, como cada día. Solo que 
          hoy es diferente.
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

      
        
        <button id="next-btn" class="primary-btn want-price-btn">Quiero mi premio!</button>
      </section>
    </div>
  `;

const printPrize = () => {
  const { getItem } = storage('lStorage');
  const name = getItem('name');
  const mainContainer = document.getElementById('main');
  mainContainer.innerHTML = priceHTML(name);

  const nextBtn = document.getElementById('next-btn');
  nextBtn.addEventListener('click', () => {
    page('/premio');
  });
};

export default printPrize;
