const homeHTML = `
    <div class="home-container">
      <section class="home-title">
        <img src="./img/home-title.png" alt="game logo" />
      </section>
      <section class="home-name">
        <img src="./img/home-subtitle.png" alt="En busca de la receta perfecta" />
      </section>
      <section class="section-area">
        <p>Pon a prueba tu ingenio y consigue llegar al final de este juego de lógica para llevarte un <span class="blue">SUCULENTO</span> premio</p>
      </section>
      <section class="home-call">
        <h2 class="dark"><em>¿Serás capaz de resolverlo?</em></h2>
        <button id="play-btn" class="primary-btn play-btn">jugar</button>
      </section>
    </div>
  `;

const printHome = () => {
  const mainContainer = document.getElementById('main');
  mainContainer.innerHTML = homeHTML;

  const playBtn = document.getElementById('play-btn');
  playBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    page('/intro');
  });
};

export default printHome;
