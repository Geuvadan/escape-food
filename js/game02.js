import storage from './storage.js';

const game02HTML = (name) => `
    <div class="game-container">
      <section class="section-area">
        <h3>CRUCIGRAMA</h3>
        <p class="story-p">
          “¿Comida casera? ¿Van a cocinar para mí? ¿Será ese el gran misterio?”
        </p>
        <p class="story-p">
          “Venga, <spam class="blue">${name}</spam>, no te entretengas. Tenemos que hacer un par de recados” te dice tu humano. 
          Retomáis el paseo juntos.
        </p>
        <p class="story-p">
          Caminando llegáis al quiosco. Últimamente tus humanos compran el periódico a diario, debe estar 
          muy interesante, porque no se pierden uno.
        </p>
        <p class="story-p"> 
          Tu te has aficionado también, y es que el crucigrama del “New DOG times” se ha convertido en 
          tu pasión. Parece el de hoy es diferente…
        </p>
        <p>
          ¿Esconderá otra pista? ¡Tendrás que resolverlo para encontrarla!
        </p>        
      </section>

      <section class="x-word">
        <input type="text" id="cell-1" class="input-letter cell-1" maxlength="1">
        <input type="text" id="cell-2" class="input-letter cell-2" maxlength="1">
        <input type="text" id="cell-3" class="input-letter cell-3" maxlength="1">
        <input type="text" id="cell-4" class="input-letter cell-4 blue" maxlength="1">
        <input type="text" id="cell-5" class="input-letter cell-5" maxlength="1">
        <input type="text" id="cell-6" class="input-letter cell-6" maxlength="1">
        <input type="text" id="cell-7" class="input-letter cell-7 blue" maxlength="1">
        <input type="text" id="cell-8" class="input-letter cell-8" maxlength="1">
        <input type="text" id="cell-9" class="input-letter cell-9" maxlength="1">
        <input type="text" id="cell-10" class="input-letter cell-10" maxlength="1">
        <input type="text" id="cell-11" class="input-letter cell-11" maxlength="1">
        <input type="text" id="cell-12" class="input-letter cell-12 blue" maxlength="1">
        <input type="text" id="cell-13" class="input-letter cell-13" maxlength="1">
        <input type="text" id="cell-14" class="input-letter cell-14" maxlength="1">
        <input type="text" id="cell-15" class="input-letter cell-15" maxlength="1">
        <input type="text" id="cell-16" class="input-letter cell-16" maxlength="1">
        <input type="text" id="cell-17" class="input-letter cell-17 blue" maxlength="1">
        <input type="text" id="cell-18" class="input-letter cell-18" maxlength="1">
        <input type="text" id="cell-19" class="input-letter cell-19" maxlength="1">
        <input type="text" id="cell-20" class="input-letter cell-20" maxlength="1">
        <input type="text" id="cell-21" class="input-letter cell-21" maxlength="1">
        <input type="text" id="cell-22" class="input-letter cell-22" maxlength="1">
        <input type="text" id="cell-23" class="input-letter cell-23 blue" maxlength="1">
        <input type="text" id="cell-24" class="input-letter cell-24" maxlength="1">
        <input type="text" id="cell-25" class="input-letter cell-25" maxlength="1">
        <input type="text" id="cell-26" class="input-letter cell-26" maxlength="1">
        <input type="text" id="cell-27" class="input-letter cell-27" maxlength="1">
        <input type="text" id="cell-28" class="input-letter cell-28 blue" maxlength="1">
        <input type="text" id="cell-29" class="input-letter cell-29" maxlength="1">
        <input type="text" id="cell-30" class="input-letter cell-30" maxlength="1">
        <input type="text" id="cell-31" class="input-letter cell-31" maxlength="1">
        <input type="text" id="cell-32" class="input-letter cell-32" maxlength="1">
        <input type="text" id="cell-33" class="input-letter cell-33" maxlength="1">
        <input type="text" id="cell-34" class="input-letter cell-34" maxlength="1">
        <input type="text" id="cell-35" class="input-letter cell-35" maxlength="1">
        <input type="text" id="cell-36" class="input-letter cell-36" maxlength="1">
        <input type="text" id="cell-37" class="input-letter cell-37 blue" maxlength="1">
        <input type="text" id="cell-38" class="input-letter cell-38" maxlength="1">
        <input type="text" id="cell-39" class="input-letter cell-39" maxlength="1">
        <input type="text" id="cell-40" class="input-letter cell-40" maxlength="1">
        <input type="text" id="cell-41" class="input-letter cell-41" maxlength="1">
        <input type="text" id="cell-42" class="input-letter cell-42" maxlength="1">
        <input type="text" id="cell-43" class="input-letter cell-43" maxlength="1">
        <input type="text" id="cell-44" class="input-letter cell-44" maxlength="1">
        <input type="text" id="cell-45" class="input-letter cell-45" maxlength="1">
        <input type="text" id="cell-46" class="input-letter cell-46 blue" maxlength="1">
        <input type="text" id="cell-47" class="input-letter cell-47" maxlength="1">
        <input type="text" id="cell-48" class="input-letter cell-48" maxlength="1">
        <input type="text" id="cell-49" class="input-letter cell-49" maxlength="1">
        <input type="text" id="cell-50" class="input-letter cell-50 blue" maxlength="1">
        <input type="text" id="cell-51" class="input-letter cell-51" maxlength="1">
        <input type="text" id="cell-52" class="input-letter cell-52" maxlength="1">
        <input type="text" id="cell-53" class="input-letter cell-53" maxlength="1">
        <input type="text" id="cell-54" class="input-letter cell-54 blue" maxlength="1">
        <input type="text" id="cell-55" class="input-letter cell-55" maxlength="1">
        <input type="text" id="cell-56" class="input-letter cell-56 blue" maxlength="1">
        <input type="text" id="cell-57" class="input-letter cell-57" maxlength="1">
        <input type="text" id="cell-58" class="input-letter cell-58" maxlength="1">
        <input type="text" id="cell-59" class="input-letter cell-59" maxlength="1">
        <input type="text" id="cell-60" class="input-letter cell-60" maxlength="1">
        <input type="text" id="cell-61" class="input-letter cell-61 blue" maxlength="1">
        <input type="text" id="cell-62" class="input-letter cell-62" maxlength="1">
        <input type="text" id="cell-63" class="input-letter cell-63" maxlength="1">
        <input type="text" id="cell-64" class="input-letter cell-64" maxlength="1">
      </section>

      <section class="section-area">
        <p> Solución: </p>
        <input type="text" id="solution" class="solution-input blue" >
        <p id="error" class="error hide">Ups! Parece que la respuesta no es correcta.</p>
      </section>

      
      <section class="navigation">
        <button id="back-btn" class="primary-btn">Volver</button>
        <button id="next-btn" class="primary-btn">Siguiente</button>
      </section>
    </div>
  `;

const printGame02 = () => {
  const { getItem } = storage('lStorage');
  const name = getItem('name');
  const mainContainer = document.getElementById('main');
  mainContainer.innerHTML = game02HTML(name);

  const nextBtn = document.getElementById('next-btn');
  nextBtn.addEventListener('click', () => {
    const solution = document.getElementById('solution').value.toUpperCase();
    if (solution === 'INGREDIENTES') {
      page('/game03');
    } else {
      const err = document.querySelector('.error');
      err.classList.remove('hide');
    }
  });

  const backBtn = document.getElementById('back-btn');
  backBtn.addEventListener('click', () => window.history.back());
};

export default printGame02;
