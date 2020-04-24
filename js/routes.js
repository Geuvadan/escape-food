import printHome from './home.js';
import printIntro from './intro.js';
import printInicio from './game00.js';

page('/', () => {
  printHome();
});

page('/intro', () => {
  printIntro();
});

page('/game00', () => {
  printInicio();
});

page();
