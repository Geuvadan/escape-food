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

      <setion class="mosaic">
        <div class="mosaic-cell">
          <div class="mosaic-card mosaic-card-1"><img src="./img/mosaic/Foto-1-2.png" alt="imagen mosaico" /></div>
          <div class="mosaic-card mosaic-card-2"><img src="./img/mosaic/Foto-1.png" alt="imagen mosaico" /></div>
        </div>
        <div class="mosaic-cell">
          <div class="mosaic-card mosaic-card-1"><img src="./img/mosaic/Foto-2-2.png" alt="imagen mosaico" /></div>
          <div class="mosaic-card mosaic-card-2"><img src="./img/mosaic/Foto-2.png" alt="imagen mosaico" /></div>
        </div>
        <div class="mosaic-cell">
          <div class="mosaic-card mosaic-card-1"><img src="./img/mosaic/Foto-3-2.png" alt="imagen mosaico" /></div>
          <div class="mosaic-card mosaic-card-2"><img src="./img/mosaic/Foto-3.png" alt="imagen mosaico" /></div>
        </div>
        <div class="mosaic-cell">
          <div class="mosaic-card mosaic-card-1"><img src="./img/mosaic/Foto-4-2.png" alt="imagen mosaico" /></div>
          <div class="mosaic-card mosaic-card-2"><img src="./img/mosaic/Foto-4.png" alt="imagen mosaico" /></div>
        </div>
        <div class="mosaic-cell">
          <div class="mosaic-card mosaic-card-1"><img src="./img/mosaic/Foto-5-2.png" alt="imagen mosaico" /></div>
          <div class="mosaic-card mosaic-card-2"><img src="./img/mosaic/Foto-5.png" alt="imagen mosaico" /></div>
        </div>
        <div class="mosaic-cell">
          <div class="mosaic-card mosaic-card-1"><img src="./img/mosaic/Foto-6-2.png" alt="imagen mosaico" /></div>
          <div class="mosaic-card mosaic-card-2"><img src="./img/mosaic/Foto-6.png" alt="imagen mosaico" /></div>
        </div>
        <div class="mosaic-cell">
          <div class="mosaic-card mosaic-card-1"><img src="./img/mosaic/Foto-7-2.png" alt="imagen mosaico" /></div>
          <div class="mosaic-card mosaic-card-2"><img src="./img/mosaic/Foto-7.png" alt="imagen mosaico" /></div>
        </div>
        <div class="mosaic-cell">
          <div class="mosaic-card mosaic-card-1"><img src="./img/mosaic/Foto-8-2.png" alt="imagen mosaico" /></div>
          <div class="mosaic-card mosaic-card-2"><img src="./img/mosaic/Foto-8.png" alt="imagen mosaico" /></div>
        </div>
        <div class="mosaic-cell">
          <div class="mosaic-card mosaic-card-1"><img src="./img/mosaic/Foto-9-2.png" alt="imagen mosaico" /></div>
          <div class="mosaic-card mosaic-card-2"><img src="./img/mosaic/Foto-9.png" alt="imagen mosaico" /></div>
        </div>
        <div class="mosaic-cell">
          <div class="mosaic-card mosaic-card-1"><img src="./img/mosaic/Foto-10-2.png" alt="imagen mosaico" /></div>
          <div class="mosaic-card mosaic-card-2"><img src="./img/mosaic/Foto-10.png" alt="imagen mosaico" /></div>
        </div>
        <div class="mosaic-cell">
          <div class="mosaic-card mosaic-card-1"><img src="./img/mosaic/Foto-11-2.png" alt="imagen mosaico" /></div>
          <div class="mosaic-card mosaic-card-2"><img src="./img/mosaic/Foto-11.png" alt="imagen mosaico" /></div>
        </div>
        <div class="mosaic-cell">
          <div class="mosaic-card mosaic-card-1"><img src="./img/mosaic/Foto-12-2.png" alt="imagen mosaico" /></div>
          <div class="mosaic-card mosaic-card-2"><img src="./img/mosaic/Foto-12.png" alt="imagen mosaico" /></div>
        </div>
        <div class="mosaic-cell">
          <div class="mosaic-card mosaic-card-1"><img src="./img/mosaic/Foto-13-2.png" alt="imagen mosaico" /></div>
          <div class="mosaic-card mosaic-card-2"><img src="./img/mosaic/Foto-13.png" alt="imagen mosaico" /></div>
        </div>
        <div class="mosaic-cell">
          <div class="mosaic-card mosaic-card-1"><img src="./img/mosaic/Foto-14-2.png" alt="imagen mosaico" /></div>
          <div class="mosaic-card mosaic-card-2"><img src="./img/mosaic/Foto-14.png" alt="imagen mosaico" /></div>
        </div>
        <div class="mosaic-cell">
          <div class="mosaic-card mosaic-card-1"><img src="./img/mosaic/Foto-15-2.png" alt="imagen mosaico" /></div>
          <div class="mosaic-card mosaic-card-2"><img src="./img/mosaic/Foto-15.png" alt="imagen mosaico" /></div>
        </div>
        <div class="mosaic-cell">
          <div class="mosaic-card mosaic-card-1"><img src="./img/mosaic/Foto-16-2.png" alt="imagen mosaico" /></div>
          <div class="mosaic-card mosaic-card-2"><img src="./img/mosaic/Foto-16.png" alt="imagen mosaico" /></div>
        </div>
        
      </setion>

  
      
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

  const mosaicCells = document.querySelectorAll('.mosaic-cell');
  mosaicCells.forEach((mosaicCell) => {
    mosaicCell.addEventListener('click', () => {
      mosaicCell.classList.toggle('is-flipped');
    });
  });

  const nextBtn = document.getElementById('next-btn');
  nextBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    page('/game02');
  });

  const backBtn = document.getElementById('back-btn');
  backBtn.addEventListener('click', () => window.history.back());
};

export default printGame01;
