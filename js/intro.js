import storage from './storage.js';

const introHTML = `
    <div class="game-container">
      <section class="section-area">
        <h3> España, primavera de 2020.</h3>
        <p>El sol se levanta como cada mañana y los primeros rayos de luz entran por la ventana de un piso en pleno centro de la ciudad.</p>
        <p>Parece un día como otro cualquiera. Nada hacía sospechar que ese día sería el comienzo de una gran aventura.</p>
        <p>Un misterio por resolver y un audaz protagonista: Tú.</p>
        <p>Deberás resolver una serie de acertijos, descubrir pistas y desentrañar claves ocultas para llegar al final de esta aventura y encontrar “La receta perfecta”</p>
      </section>
      <section class="section-area form-section">
        <h3>Crea tu personaje</h3>
        <form class="btn-margin">
          <fieldset>
            <label for="name">Nombre de tu perro</label>
            <input type="text" name="name" id="nameInput" placeholder="Frankie" required/>
          </fieldset>
          <fieldset>
            <label for="size">Tamaño</label>
            <div class="size-radio">
              <div class="img-option">
                <label for="xs">
                  <input type="radio" name="size" id="xs" value="xs" required/>
                  <img src="../img/size-xs.png" alt="size xs" />XS</label>
                
              </div>
              <div class="img-option">
                <label for="m">
                  <input type="radio" name="size" id="m" value="m" required/>
                  <img src="../img/size-m.png" alt="size m" />M</label>
                
              </div>
              <div class="img-option">
                <label for="l">
                  <input type="radio" name="size" id="l" value="l" required/>
                  <img src="../img/size-l.png" alt="size l" />L</label>
                
              </div>
              <div class="img-option">
                <label for="xl">
                  <input type="radio" name="size" id="xl" value="xl" required/>
                  <img src="../img/size-xl.png" alt="size xl" />XL</label>
                
              </div>
            </div>
          </fieldset>
          <button id="pjBtn" class="primary-btn" type="submit">Crear</button>
          <p id="error" class="error hide">Asegurate de haber escrito un nombre y elegido un tamaño</p>
        </form>
      </section>
      
    </div>
  `;

const printIntro = () => {
  const { setItem } = storage('lStorage');
  const mainContainer = document.getElementById('main');
  mainContainer.innerHTML = introHTML;

  const btn = document.getElementById('pjBtn');
  btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    const name = document.getElementById('nameInput');
    const size = document.querySelector('input[name="size"]:checked');
    if (name.value && size.value) {
      setItem('name', name.value);
      setItem('size', size.value);
      page('/game00');
    } else {
      const err = document.querySelector('.error');
      err.classList.remove('hide');
    }
  });
};

export default printIntro;
