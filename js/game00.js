const inicioHTML = `
    <div class="game-container">
      <section class="section-area">
        <p>El sol se levanta como cada mañana y los primeros rayos de luz entran por la ventana de un piso en pleno centro de la ciudad.</p>
        <p>Parece un día como otro cualquiera. Nada hacía sospechar que ese día sería el comienzo de una gran aventura.</p>
        <p>Un misterio por resolver y un audaz protagonista: Tú.</p>
        <p>Deberás resolver una serie de acertijos, descubrir pistas y desentrañar claves ocultas para llegar al final de esta aventura y encontrar “La receta perfecta”</p>
      </section>
      
      
    </div>
  `;

const printInicio = () => {
  const mainContainer = document.getElementById('main');
  mainContainer.innerHTML = inicioHTML;
};

export default printInicio;
