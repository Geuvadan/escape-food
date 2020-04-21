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
        <button class="primary-btn">jugar</button>
      </section>
    </div>
  `;

const printHome = () => {
  const mainContainer = document.getElementById('main');
  console.log(mainContainer);
  mainContainer.innerHTML = homeHTML;
};

export default printHome;
