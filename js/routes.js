import printHome from './home.js';
import printIntro from './intro.js';
import printInicio from './01-inicio.js';

page('/', () => {
  printHome();
});

page('/intro', async () => {
  await printIntro();
});

page('/inicio', () => {
  printInicio();
});

page();
