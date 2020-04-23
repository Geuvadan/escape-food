const homeHTML = `
    <div class="home-container">
      <section class="home-title">
        <img src="./img/home-title.png" alt="game logo" />
      </section>
      <section class="home-name">
        <img src="./img/home-subtitle.png" alt="En busca de la receta perfecta" />
      </section>
      <section class="home-call">
        <h3><em>¿Serás capaz de resolverlo?</em></h3>
        <button id="play-btn" class="primary-btn">jugar</button>
      </section>
    </div>
  `;

const printHome = () => {
  const mainContainer = document.getElementById('main');
  console.log(mainContainer);
  mainContainer.innerHTML = homeHTML;
  const playBtn = document.getElementById('play-btn');
  playBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    location.href = '/intro';
  });
};

export default printHome;
