import storage from './storage.js';

const game05HTML = (name) => `
    <div class="game-container">
      <section class="section-area">
        <h3>ANTES DE CENAR...</h3>
      </section>

      <section class="section-area">      
        <div class="section-img">
          <img
            srcset="./img/antes-de-cenar/CajaFrankie-600w.png 600w, 
                  ./img/antes-de-cenar/CajaFrankie-1200w.png 1200w,
                  ./img/antes-de-cenar/CajaFrankie-1800w.png 1800w"
            src="./img/antes-de-cenar/CajaFrankie-1200w.png"
            alt="vuelta a casa list"
          />
        </div>
      </section>

      <section class="section-area">
        <p class="story-p">
          ¡Has conseguido abrir el candado! Dentro de la nevera encuentras una nota:
        </P>
        <p class="story-p">
          “¡Bravo <span class="blue">${name}</span>, lo has logrado! Este es el paquete que 
          trajo el repartidor esta mañana. Es comida casera de Frankie, para ti. Pero antes 
          de cenar, tenemos una cita. Te espero a las 20.00h, donde cada día.
        </P>
        <p class="story-p"> 
          FDO. Tu humano que te quiere”
        </P>
        <p>
          Resulta que al final podrás comer comida casera, pero antes, tienes que reencontrarte 
          con tu humano. A las 20.00h donde siempre, ¿Qué querrá decir?
        </p>        
      </section>

      <section class="section-area">
        <h3>¿Dónde te espera tu humano a las 20:00h?</h3>
        <p>En el... </p>
        <div class="final-word">
          <input type="text" id="cell-1" class="input-letter" maxlength="1">
          <input type="text" id="cell-2" class="input-letter" maxlength="1">
          <input type="text" id="cell-3" class="input-letter" maxlength="1">
          <input type="text" id="cell-4" class="input-letter" maxlength="1">
          <input type="text" id="cell-5" class="input-letter" maxlength="1">
          <input type="text" id="cell-6" class="input-letter" maxlength="1">
        </div>
        <div class="story-div">
          <p id="error" class="error hide">Ups! Parece que la respuesta no es correcta.</p>
        </div>
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
              Parece un día de confinamiento como otro cualquiera. ¿Qué hacen los humanos a las 20.00h
              cada día desde entonces?
            </p>
          </div>
        </div>

        <div class="accordionItem close">
          <h5 class="accordionItemHeading">Pista 2</h5>
          <div class="accordionItemContent">
            <p class="clue-text">
              Escuchas ruidos fuertes “clap-clap-clap”, parecen aplausos. ¿Dónde te estará esperando tu
              humano?
            </p>
          </div>
        </div>

        <div class="accordionItem close">
          <h5 class="accordionItemHeading">Pista 3</h5>
          <div class="accordionItemContent">
            <p class="clue-text">
              ¿Recuerdas el plano de tu casa? Seguro que recuerdas que tenías una buena terraza o…
            </p>
          </div>
        </div>
      </div>
    </div>
  `;

const printGame05 = () => {
  const { getItem, setItem } = storage('lStorage');
  const name = getItem('name');
  const mainContainer = document.getElementById('main');
  mainContainer.innerHTML = game05HTML(name);

  const nextBtn = document.getElementById('next-btn');
  nextBtn.addEventListener('click', () => {
    const inputs = document.querySelectorAll('.input-letter');
    const letters = [];
    inputs.forEach((letter) => {
      letters.push(letter.value);
    });
    if (
      letters.join('').toUpperCase() === 'BALCON' ||
      letters.join('').toUpperCase() === 'BALCÓN'
    ) {
      setItem('Game05', true);
      page('/game-end');
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

export default printGame05;
