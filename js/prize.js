import storage from './storage.js';

const priceHTML = (name) => `
    <div class="game-container">
      <h3 class="prize-h3">¡FELICIDADES ${name.toUpperCase()}!</h3>
      <section class="section-area">
        <h3>¡Tenemos DOS REGALOS para ti!</h3>
      </section>

      <div class="prize-frankie">
        <div class="prize-frankie-img">
          <img src="./img/premio/frankie-unboxing.gif" alt="unboxing Frankie"/>
        </div>
        <div class="prize-frankie-text">
          <p><span class="blue">DOS SEMANAS</span> de Frankie desde <span class="blue">9,90€</span></p>
          <p>+</p>
          <p><span class="blue">CUPONAZO</span> descuento de <span class="blue">15€</span> con el código</p>
          <p><span class="blue">"ESCAPEFOOD"</span></P>
        </div>
      </div>

      <div class="navigation-prize">
        <a href="https://frankietheking.com/wizard/" target="_blank" id="frankie-btn" class="primary-btn block-btn">¡Lo quiero!</a>
      </div>

      <div class="prize-pdf">
        <div class="prize-frankie-text">
          <p>Y descubre la cocina más perra con tu Recetario Frankie</p>
          <p><span class="blue">GRATUITO</span></P>
        </div>

        <div class="navigation-prize">
          <a href="../RecetarioFrankie.pdf" target="_blank" id="download-btn" class="primary-btn block-btn">DESCARGAR PDF</a>
        </div>

        <div class="prize-pdf-img">
          <img
            srcset="./img/premio/Hella_Centro-600w.png 600w, 
                  ./img/premio/Hella_Centro-1200w.png 1200w,
                  ./img/premio/Hella_Centro-1800w.png 1800w"
            src="./img/premio/Hella_Centro-12000w.png"
            alt="Hella cocinera"
          />
        </div>
      </div>

      

      
        
        
    </div>
  `;

const printPrize = () => {
  const { getItem } = storage('lStorage');
  const name = getItem('name');
  const mainContainer = document.getElementById('main');
  mainContainer.innerHTML = priceHTML(name);
};

export default printPrize;
