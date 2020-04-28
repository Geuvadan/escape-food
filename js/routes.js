import printHome from './home.js';
import printIntro from './intro.js';
import printGame00 from './game00.js';
import printGame01 from './game01.js';
import printGame02 from './game02.js';
import printGame03 from './game03.js';
import printGame04 from './game04.js';
import printGame05 from './game05.js';
import printGameEnd from './gameEnd.js';
import notFound from './notFound.js';

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

page('/game02', () => {
  printGame02();
});

page('/game03', () => {
  printGame03();
});

page('/game04', () => {
  printGame04();
});

page('/game05', () => {
  printGame05();
});

page('/game-end', () => {
  printGameEnd();
});

page('/*', () => {
  notFound();
});

page();
