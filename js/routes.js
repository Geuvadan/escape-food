import printHome from './home.js';
import printIntro from './intro.js';
import printGame00 from './game00.js';
import printGame01 from './game01.js';

page('/', () => {
  printHome();
});

page('/intro', () => {
  printIntro();
});

page('/game00', () => {
  printGame00();
});

page('/game01', () => {
  printGame01();
});

page();
