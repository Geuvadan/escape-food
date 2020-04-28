const cheatHTML = `
<div class="game-container">
  <div class="section-img">
    <img src="./img/home-subtitle.png" alt="En busca de la receta perfecta" />
  </div>
  <section class="section-area">
    <h3>Ups! Parece que no has completado alguna prueba anterior</h3>
  </section>

  <section class="navigation">
    <button id="back-btn" class="primary-btn">Volver</button>
    <button id="home-btn" class="primary-btn">Inicio</button>
  </section>
</div>
`;

const printCheat = () => {
  const mainContainer = document.getElementById('main');
  mainContainer.innerHTML = cheatHTML;

  const nextBtn = document.getElementById('home-btn');
  nextBtn.addEventListener('click', () => {
    page('/');
  });

  const backBtn = document.getElementById('back-btn');
  backBtn.addEventListener('click', () => window.history.back());
};

export default printCheat;
