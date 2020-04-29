import storage from './storage.js';

const game03HTML = (name) => `
    <div class="game-container">
      <section class="section-area">
        <h3>SUPERMERCADO</h3>
        <p class="story-p">
          Mientras celebras tu descubrimiento, empieza a llover. Por suerte, ya casi habéis 
          llegado a la siguiente parada: El MercaDOGna, uno de los pocos sitios a los que 
          últimamente van tus humanos.
        </p>
        <P>
          “¡Ostras Perrin! ¡Se me ha mojado la lista! ¿Y ahora cómo hago la compra?” Oyes 
          decir a tu humano. Con la lluvia, la lista de la compra se ha emborronado. Los 
          ingredientes se pueden distinguir, pero las cantidades no quedan nada claras ¡Échale 
          un vistazo a la lista, quizás tú puedas ayudarle!” 
        </p>        
      </section>
      
      <section class="section-area">      
        <div class="section-img">
          <img
            srcset="./img/supermarket/ListaCompra-600w.png 545w, 
                  ./img/supermarket/ListaCompra-1200w.png 1160w,
                  ./img/supermarket/ListaCompra-1800w.png 1700w"
            src="./img/supermarket/ListaCompra-1200w.png"
            alt="supermarket list"
          />
        </div>

        <div class="story-div">
          <p> Solución: </p>
        </div>

        <div class="supermarket-list-quantities">
          <fieldset>
            <label for="ing1">Carne de ternera</label>
            <input type="number" min="0" max="99" maxlength="2" name="ing1" id="ing1" />
            <span class="blue">,</span>
            <input type="number" min="0" max="99" maxlength="2" name="ing1-dec" id="ing1-dec" />
            <span class="blue">%</span>
          </fieldset>
          <fieldset>
            <label for="ing2">Aceite</label>
            <input type="number" min="0" max="99" maxlength="2" name="ing2" id="ing2" />
            <span class="blue">,</span>
            <input type="number" min="0" max="99" maxlength="2" name="ing2-dec" id="ing2-dec" />
            <span class="blue">%</span>
          </fieldset>
          <fieldset>
            <label for="ing3">Mazanas</label>
            <input type="number" min="0" max="99" maxlength="2" name="ing3" id="ing3" />
            <span class="blue">,</span>
            <input type="number" min="0" max="99" maxlength="2" name="ing3-dec" id="ing3-dec" />
            <span class="blue">%</span>
          </fieldset>
          <fieldset>
            <label for="ing4">Zanahoria</label>
            <input type="number" min="0" max="99" maxlength="2" name="ing4" id="ing4" />
            <span class="blue">,</span>
            <input type="number" min="0" max="99" maxlength="2" name="ing4-dec" id="ing4-dec" />
            <span class="blue">%</span>
          </fieldset>
          <fieldset>
            <label for="ing5">Espinacas</label>
            <input type="number" min="0" max="99" maxlength="2" name="ing5" id="ing5" />
            <span class="blue">,</span>
            <input type="number" min="0" max="99" maxlength="2" name="ing5-dec" id="ing5-dec" />
            <span class="blue">%</span>
          </fieldset>
          <fieldset>
            <label for="ing6">Hígado de ternera</label>
            <input type="number" min="0" max="99" maxlength="2" name="ing6" id="ing6" />
            <span class="blue">,</span>
            <input type="number" min="0" max="99" maxlength="2" name="ing6-dec" id="ing6-dec" />
            <span class="blue">%</span>
          </fieldset>
          <fieldset>
            <label for="ing7">Romero</label>
            <input type="number" min="0" max="99" maxlength="2" name="ing7" id="ing7" />
            <span class="blue">,</span>
            <input type="number" min="0" max="99" maxlength="2" name="ing7-dec" id="ing7-dec" />
            <span class="blue">%</span>
          </fieldset>
        </div>

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
              Parece que algunas letras de los ingredientes esconden un mensaje. ¿Será una pista para
              encontrar las cantidades?
            </p>
          </div>
        </div>

        <div class="accordionItem close">
          <h5 class="accordionItemHeading">Pista 2</h5>
          <div class="accordionItemContent">
            <p class="clue-text">
              Puede que el mensaje oculto que había en la lista te ayude a dar con las cantidades de los
              ingredientes. ¿Has probado a buscarlo en google?
            </p>
          </div>
        </div>

        <div class="accordionItem close">
          <h5 class="accordionItemHeading">Pista 3</h5>
          <div class="accordionItemContent">
            <p class="clue-text">
              Seguro que en la web de
              <a href="http://www.frankietheking.com" target="_blank">www.frankietheking.com</a> pueden echarte una pata
              con las recetas, sus ingredientes y proporciones.
            </p>
          </div>
        </div>

        <div class="accordionItem close">
          <h5 class="accordionItemHeading">Pista 4</h5>
          <div class="accordionItemContent">
            <p class="clue-text">
              Los ingredientes parece que son para cocinar la receta de ternera, seguro que ahí encuentras
              las proporciones correctas.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  `;

const printGame03 = () => {
  const { getItem, setItem } = storage('lStorage');
  const name = getItem('name');
  const mainContainer = document.getElementById('main');
  mainContainer.innerHTML = game03HTML(name);

  const nextBtn = document.getElementById('next-btn');
  nextBtn.addEventListener('click', () => {
    const inputArr = document.querySelectorAll('input[type="number"]');
    let valueArr = [];
    inputArr.forEach((elem) => valueArr.push(parseInt(elem.value)));
    const total = valueArr.reduce((a, b) => a + b);

    if (total === 103) {
      setItem('Game03', true);
      page('/game04');
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

export default printGame03;
