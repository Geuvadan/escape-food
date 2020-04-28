import storage from './storage.js';

const game04HTML = (name) => `
    <div class="game-container">
      <section class="section-area">
        <h3>VUELTA A CASA</h3>
        <p class="story-p">
          “¡Gracias a ti, <span class="blue">${name}</span>, he podido hacer la compra, eres genial!” Te dice tu humano 
          mientras te acaricia. “Será mejor que volvamos a casa ya.”
        </p>
        <p class="story-p">
          Toca emprender el camino de vuelta. Cada día, al llegar a casa, sigues la misma rutina. 
          La viste en Instagram y te gustó tanto que la haces a diario para sentirte como 
          un auténtico perrinfluencer.
        </p>
        <p class="story-p">
          Llegas a casa y empiezas tu “Rutina Frankie”. Siguiendo el recorrido por casa, descubres 
          que la nevera está cerrada con un candado de jeroglíficos. Te suena haber visto estos 
          símbolos antes, durante tu recorrido por las habitaciones.
        </p>
        <p>
          Colocando el símbolo de cada habitación, en el orden que sigues cada día, puedes encontrar 
          la clave ¿Cuál será la combinación correcta?”
        </p>      
      </section>

      <section class="section-area">      
        <div class="section-img">
          <img
            srcset="./img/vuelta-a-casa/PlanoSimbolos-600w.png 600w, 
                  ./img/vuelta-a-casa/PlanoSimbolos-1200w.png 1200w,
                  ./img/vuelta-a-casa/PlanoSimbolos-1800w.png 1800w"
            src="./img/vuelta-a-casa/PlanoSimbolos-1200w.png"
            alt="vuelta a casa list"
          />
        </div>
      </section>

      <section class="section-area">
        <p class="blue">Haz click en los iconos para colocarlos en el orden correcto</p>
        <div class="home-icons">
          <div class="home-icon" data-value="balcon"><img src="./img/vuelta-a-casa/Symbol-balcon.png" alt="balcon"></div>
          <div class="home-icon" data-value="bano"><img src="./img/vuelta-a-casa/Symbol-bano.png" alt="baño"></div>
          <div class="home-icon" data-value="cocina"><img src="./img/vuelta-a-casa/Symbol-cocina.png" alt="cocina"></div>
          <div class="home-icon" data-value="despacho"><img src="./img/vuelta-a-casa/Symbol-despacho.png" alt="despacho"></div>
          <div class="home-icon" data-value="dormitorio"><img src="./img/vuelta-a-casa/Symbol-dormitorio.png" alt="dormitorio"></div>
          <div class="home-icon" data-value="gym"><img src="./img/vuelta-a-casa/Symbol-gym.png" alt="gym"></div>
          <div class="home-icon" data-value="salon"><img src="./img/vuelta-a-casa/Symbol-salon.png" alt="salon"></div>
        </div>
        <p class="blue">CLAVE</p>
        <div class="code-spaces">
          <div class="code-space code-1"></div>
          <div class="code-space code-2"></div>
          <div class="code-space code-3"></div>
          <div class="code-space code-4"></div>

        </div>
        <button id="reset-btn" class="primary-btn long-btn">Restaurar</button>
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
              Si se llama “Rutina Frankie” seguramente el tal Frankie tendrá un perfil en Instagram.
            </p>
          </div>
        </div>

        <div class="accordionItem close">
          <h5 class="accordionItemHeading">Pista 2</h5>
          <div class="accordionItemContent">
            <p class="clue-text">
              En el perfil de
              <a href="https://www.instagram.com/frankiefordogs/?hl=es" target="_blank"
                >@frankiefordogs</a
              >
              en Instagram podrás ver exactamente el recorrido de la “Rutina Frankie”.
            </p>
          </div>
        </div>

        <div class="accordionItem close">
          <h5 class="accordionItemHeading">Pista 3</h5>
          <div class="accordionItemContent">
            <p class="clue-text">
              Parece que en el perfil de
              <a href="https://www.instagram.com/frankiefordogs/?hl=es" target="_blank"
                >@frankiefordogs</a
              >
              hay unas cuantas historias destacadas. ¿Las has visto?
            </p>
          </div>
        </div>

        <div class="accordionItem close">
          <h5 class="accordionItemHeading">Pista 4</h5>
          <div class="accordionItemContent">
            <p class="clue-text">
              Coloca los símbolos en el orden que sigue la “Rutina Frankie”en las stories de Instagram. Ya
              casi tienes la clave.
            </p>
          </div>
        </div>
      </div>
    </div>
  `;

const printGame04 = () => {
  const { getItem, setItem } = storage('lStorage');
  const name = getItem('name');
  const mainContainer = document.getElementById('main');
  mainContainer.innerHTML = game04HTML(name);

  const homeIcons = document.querySelectorAll('.home-icon');
  const codeSpaces = document.querySelectorAll('.code-space');
  let code = [];

  homeIcons.forEach((homeIcon) => {
    const homeIconImg = homeIcon.children[0].outerHTML;
    const homeIconValue = homeIcon.dataset.value;

    homeIcon.addEventListener('click', () => {
      for (let i = 0; i < codeSpaces.length; i++) {
        if (codeSpaces[i].children.length === 0) {
          codeSpaces[i].innerHTML = homeIconImg;
          code.push(homeIconValue);
          break;
        }
      }
    });
  });

  const resetBtn = document.getElementById('reset-btn');
  resetBtn.addEventListener('click', () => {
    codeSpaces.forEach((codeSpace) => (codeSpace.innerHTML = ''));
    code = [];
    const err = document.querySelector('.error');
    err.classList.add('hide');
  });

  const nextBtn = document.getElementById('next-btn');
  nextBtn.addEventListener('click', () => {
    if (code.join('-') === 'bano-dormitorio-gym-salon') {
      setItem('Game04', true);
      page('/game05');
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

export default printGame04;
