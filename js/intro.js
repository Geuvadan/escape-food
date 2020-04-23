const introHTML = `
    <div class="game-container">
      <section class="section-area">
        <p>El sol se levanta como cada mañana y los primeros rayos de luz entran por la ventana de un piso en pleno centro de la ciudad.</p>
        <p>Parece un día como otro cualquiera. Nada hacía sospechar que ese día sería el comienzo de una gran aventura.</p>
        <p>Un misterio por resolver y un audaz protagonista: Tú.</p>
        <p>Deberás resolver una serie de acertijos, descubrir pistas y desentrañar claves ocultas para llegar al final de esta aventura y encontrar “La receta perfecta”</p>
      </section>
      <section class="section-area form-section">
        <h3>Crea tu personaje</h3>
        <form>
          <fieldset>
            <label for="name">Nombre de tu perro</label>
            <input type="text" name="name" id="name" placeholder="Frankie"/>
          </fieldset>
          <fieldset>
          <label for="size">Tamaño</label>
            <input type="radio" name="size" id="xs" value="xs" />
            <input type="radio" name="size" id="m" value="m" />
            <input type="radio" name="size" id="l" value="l" />
            <input type="radio" name="size" id="xl" value="xl" />
          </fieldset>
          <button class="primary-btn" type="submit">Crear</button>
        </form>
      </section>
      
    </div>
  `;

const printIntro = () => {
  const mainContainer = document.getElementById('main');
  console.log(mainContainer);
  mainContainer.innerHTML = introHTML;
};

export default printIntro;
