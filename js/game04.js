import storage from './storage.js';

const game04HTML = (name) => `
    <div class="game-container">
      <section class="section-area">
        <h3>GAME 04</h3>
        <p class="story-p">
          Game 04
        </p>
        
      </section>

      
      <section class="navigation">
        <button id="back-btn" class="primary-btn">Volver</button>
        <button id="next-btn" class="primary-btn">Siguiente</button>
      </section>
    </div>
  `;

const printGame04 = () => {
  const { getItem } = storage('lStorage');
  const name = getItem('name');
  const mainContainer = document.getElementById('main');
  mainContainer.innerHTML = game04HTML(name);

  const nextBtn = document.getElementById('next-btn');
  nextBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    page('/game05');
  });

  const backBtn = document.getElementById('back-btn');
  backBtn.addEventListener('click', () => window.history.back());
};

export default printGame04;
