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

      <section class="section-area">
        <p> Solución: </p>
        <input type="text" id="solution" class="solution-input blue" >
        <p id="error" class="error hide">Ups! Parece que la respuesta no es correcta.</p>
      </section>

      <section class="navigation">
        <button id="back-btn" class="primary-btn">Volver</button>
        <button id="next-btn" class="primary-btn">Siguiente</button>
      </section>

      <div class="accordionWrapper">
        <div class="accordionItem close">
          <h5 class="accordionItemHeading">Pista 1</h5>
          <div class="accordionItemContent">
            <p class="clue-text">
              En todas las imágenes hay perros, pero algunos parece que no comen muy sano (ni muy rico). 
              Pulsa las que no cuadran y encuentra la respuesta.
            </p>
          </div>
        </div>

        <div class="accordionItem close">
          <h5 class="accordionItemHeading">Pista 2</h5>
          <div class="accordionItemContent">
            <p class="clue-text">
              Las verduras y frutas son muy sanas, esas bolitas marrones no parecen igual de 
              saludables.
            </p>
          </div>
        </div>

        <div class="accordionItem close">
          <h5 class="accordionItemHeading">Pista 3</h5>
          <div class="accordionItemContent">
            <p class="clue-text">
              Pulsando cada imagen encontrarás un código, parece que ordenándolas por números, 
              forman dos palabras.
            </p>
          </div>
        </div>

        <div class="accordionItem close">
          <h5 class="accordionItemHeading">Pista 4</h5>
          <div class="accordionItemContent">
            <p class="clue-text">
              Los números te darán la posición de cada par de letras. Las letras son las sílabas 
              que forman las palabras.
            </p>
          </div>
        </div>

        <div class="accordionItem close">
          <h5 class="accordionItemHeading">Pista 5</h5>
          <div class="accordionItemContent">
            <p class="clue-text">
              Ordena cada código de las imágenes que no encajan. los números te darán la posición. 
              Al escribir las letras en el orden correcto, obtendrás la respuesta
            </p>
          </div>
        </div>
      </div>
    </div>
  `;

const printGame01 = () => {
  const { getItem, setItem } = storage('lStorage');
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
  nextBtn.addEventListener('click', () => {
    const solution = document.getElementById('solution').value.toUpperCase();
    if (solution === 'COMIDA CASERA') {
      setItem('Game01', true);
      page('/game02');
    } else {
      const err = document.querySelector('.error');
      err.classList.remove('hide');
    }
  });

  const backBtn = document.getElementById('back-btn');
  backBtn.addEventListener('click', () => window.history.back());

  /**
   * CLUES
   */

  const accItem = document.getElementsByClassName('accordionItem');
  const accHD = document.getElementsByClassName('accordionItemHeading');
  for (let i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
  }
  function toggleItem() {
    const itemClass = this.parentNode.className;
    for (let i = 0; i < accItem.length; i++) {
      accItem[i].className = 'accordionItem close';
    }
    if (itemClass == 'accordionItem close') {
      this.parentNode.className = 'accordionItem open';
    }
  }
};

export default printGame01;
