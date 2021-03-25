import * as actionsTypes from '../actionsType';

export const setPictureListAction = result => ({
  type: actionsTypes.FETCH_PICTURES,
  pictures: result,
});