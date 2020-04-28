import storage from './storage.js';

const game00HTML = (name) => `
    <div class="game-container">
      <div class="section-img">
        <img src="./img/home-subtitle.png" alt="En busca de la receta perfecta" />
        <h3>${name}</h3>
      </div>
      <section class="section-area">
        <p class="story-p">
          Estás desayunando en casa con tu familia humana. Últimamente pasan mucho más tiempo en casa, 
          no se que de una GUAUrentena. Te encanta tenerlos más tiempo contigo, pero... te dan un poco de 
          envidia, reconócelo. Pasan el día cocinando deliciosas recetas, cada día prueban una nueva. 
        </p>
      
        <p class="story-p">
          <i>“Mola mucho ser un humano. Seguro que su comida está más rica que estas malditas croquetas marrones 
          secas que como yo”.</i> Dices en voz baja mientras miras tu plato.
          Uno se acerca y te acaricia diciendo <i>“Ay <span class="blue">${name}</span> si supieras lo que va a 
          pasar hoy…”</i>  
        </p>
        <p>
          <i>“¿Qué va a pasar hoy? ¿A qué se refiere? Espero que no sea otro Challenge de esos en los que me 
          toca saltar un muro del papel del culo…”</i> Piensas para ti mismo.
        </p>
      </section>
      <section class="section-area">
        <p class="story-p">
          De pronto algo interrumpe tus pensamientos ¡Acaba de sonar el timbre!
        </p>
        <p>
          Corres a la puerta a ladrar un poco (es parte de tu forma de ser, no puedes evitarlo). Un repartidor. 
          Será otro puzle o algún juego de mesa, con los que se entretienen tus humanos estos días. Una vez 
          recogen el paquete, escuchas el sonido de tu correa. Ya sabes lo que toca, tu colita no para de 
          moverse ¡Os vais a la calle!”
        </p>
      </section>
      <section class="navigation">
        <button id="back-btn" class="primary-btn">Volver</button>
        <button id="next-btn" class="primary-btn">Siguiente</button>
      </section>
    </div>
  `;

const printGame00 = () => {
  const { getItem } = storage('lStorage');
  const name = getItem('name');
  const mainContainer = document.getElementById('main');
  mainContainer.innerHTML = game00HTML(name);

  const nextBtn = document.getElementById('next-btn');
  nextBtn.addEventListener('click', () => {
    page('/game01');
  });

  const backBtn = document.getElementById('back-btn');
  backBtn.addEventListener('click', () => window.history.back());
};

export default printGame00;
