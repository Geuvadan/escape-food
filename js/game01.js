import storage from './storage.js';

const game01HTML = (name) => `
    <div class="game-container">
      <section class="section-area">
        <h3>MOSAICO</h3>
        <p class="story-p">
          Ir a pasear es uno de tus momentos favoritos, pero no puedes dejar de darle vueltas a 
          lo que te dijeron esta mañana en la cocina “Si supieras lo que va a pasar hoy…” Estás 
          dispuesto a resolver el misterio. Mientras paseas detectas un rastro “snif-snif”. Parece 
          que hay algo escondido bajo la arena.
        </p>
        <p class="story-p">
          Escarbando consigues desenterrar una especie de mosaico. No todas las imágenes son iguales, 
          hay algunas que no cuadran. Parece un rompecabezas con un mensaje oculto. Tendrás que resolverlo:
        </p>
      </section>

      
      
      <section class="navigation">
        <button id="back-btn" class="primary-btn">Volver</button>
        <button id="next-btn" class="primary-btn">Siguiente</button>
      </section>
    </div>
  `;

const printGame01 = () => {
  const { getItem } = storage('lStorage');
  const name = getItem('name');
  const mainContainer = document.getElementById('main');
  mainContainer.innerHTML = game01HTML(name);

  const nextBtn = document.getElementById('next-btn');
  nextBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    page('/game02');
  });

  const backBtn = document.getElementById('back-btn');
  backBtn.addEventListener('click', () => window.history.back());
};

export default printGame01;
