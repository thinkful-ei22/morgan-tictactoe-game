const CLICK_HANDLER = 'CLICK_HANDLER';
export const clickHandler = (row, col) => ({
  type: CLICK_HANDLER,
  row,
  col
});

const RESET_GAME = 'RESET_GAME';
export const resetGame = () => ({
  type: RESET_GAME
});

