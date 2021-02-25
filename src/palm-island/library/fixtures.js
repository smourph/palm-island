import {ACTION} from './constants';

export const aBunchOfResources = (wood, fish, stone) => ({
  wood: wood,
  fish: fish,
  stone: stone
});

export const anEmptyBunchOfResources = () => aBunchOfResources(0, 0, 0);

export const aBunchOfWoods = quantity => aBunchOfResources(quantity, 0, 0);

export const aBunchOfFishes = quantity => aBunchOfResources(0, quantity, 0);

export const aBunchOfStones = quantity => aBunchOfResources(0, 0, quantity);

export const anAction = (type, costOptions) => ({
  type: type ? type : ACTION.STORE,
  costOptions: costOptions ? costOptions : [anEmptyBunchOfResources()]
});
