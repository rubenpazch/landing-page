import * as actionsTypes from '../actionsType';

export const setPictureListAction = result => ({
  type: actionsTypes.FETCH_PICTURES,
  pictures: result,
});

export const setCurrentPictures = result => ({
  type: actionsTypes.CURRENT_PICTURES,
  current_pictures: result,
});