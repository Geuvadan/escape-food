import printHome from './home.js';
import printIntro from './intro.js';
import printGame00 from './game00.js';
import printGame01 from './game01.js';
import printGame02 from './game02.js';
import printGame03 from './game03.js';
import printGame04 from './game04.js';
import printGame05 from './game05.js';
import printGameEnd from './gameEnd.js';
import printPrize from './prize.js';
import printCheat from './cheat.js';
import notFound from './notFound.js';
import storage from './storage.js';

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
  const { getItem } = storage('lStorage');
  getItem('Game01') ? printGame02() : printCheat();
});

page('/game03', () => {
  const { getItem } = storage('lStorage');
  getItem('Game02') ? printGame03() : printCheat();
});

page('/game04', () => {
  const { getItem } = storage('lStorage');
  getItem('Game03') ? printGame04() : printCheat();
});

page('/game05', () => {
  const { getItem } = storage('lStorage');
  getItem('Game04') ? printGame05() : printCheat();
});

page('/game-end', () => {
  const { getItem } = storage('lStorage');
  getItem('Game05') ? printGameEnd() : printCheat();
});

page('/premio', () => {
  const { getItem } = storage('lStorage');
  getItem('GetPrize') ? printPrize() : printCheat();
});

page('/*', () => {
  notFound();
});

page();
