import { hash, colorSymbols } from '../constants';

const getRandomColor = () => {
  const letters = colorSymbols;
  const hex = 16;
  const HexColorCodeNum = 6;

  let color = hash;

  for (let i = 0; i < HexColorCodeNum; i++) {
    color += letters[Math.floor(Math.random() * hex)];
  }
  return color;
};

export { getRandomColor };
