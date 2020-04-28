const notFoundHTML = `
<div class="game-container">
  <div class="section-img">
    <img src="./img/home-subtitle.png" alt="En busca de la receta perfecta" />
  </div>
  <section class="section-area">
    <h3>Ups! algo ha ido mal o no encontramos lo que buscas</h3>
  </section>

  <section class="navigation">
    <button id="back-btn" class="primary-btn">Volver</button>
    <button id="home-btn" class="primary-btn">Inicio</button>
  </section>
</div>
`;

const notFound = () => {
  const mainContainer = document.getElementById('main');
  mainContainer.innerHTML = notFoundHTML;

  const nextBtn = document.getElementById('home-btn');
  nextBtn.addEventListener('click', () => {
    page('/');
  });

  const backBtn = document.getElementById('back-btn');
  backBtn.addEventListener('click', () => window.history.back());
};

export default notFound;
