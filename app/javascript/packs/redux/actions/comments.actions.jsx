import * as actionsTypes from '../actionsType';

export const setCommentListAction = result => ({
  type: actionsTypes.FETCH_COMMENTS,
  comments: result,
});