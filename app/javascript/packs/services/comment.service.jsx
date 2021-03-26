import axios from 'axios';

export const COMMENT_ENDPOINT = 'https://desolate-reef-34872.herokuapp.com/api/v1/comments';

export function getCommentsAsync() {
  return axios.get(COMMENT_ENDPOINT);
}

// eslint-disable-next-line camelcase
export function saveComment(usuario, comentario, restaurant_id) {
  return axios.post(COMMENT_ENDPOINT, {
    comment: {
      usuario,
      comentario,
      restaurant_id,
    },
  });
}