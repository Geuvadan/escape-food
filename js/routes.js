import printHome from './home.js';
import printIntro from './intro.js';

page('/', () => {
  printHome();
});

page('/intro', () => {
  printIntro();
});

page();
