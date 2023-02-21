import csrfFetch from "./csrf.js";

const SET_ALBUMS = "albums/setAlbums";
const ADD_ALBUM = "albums/addAlbum";

const setAlbums = (albums) => ({
  type: SET_ALBUMS,
  payload: albums,
});

export const addAlbum = (album) => ({
  type: ADD_ALBUM,
  payload: album,
});

export const fetchAlbums = () => async (dispatch) => {
  const response = await csrfFetch(`/api/albums`);
  const data = await response.json();
  dispatch(setAlbums(data));
  return response;
};

export const fetchAlbum = (albumId) => async (dispatch) => {
  const response = await csrfFetch(`/api/albums/${albumId}`);
  const data = await response.json();
  dispatch(addAlbum(data));
  return response;
};

function albumsReducer(state = {}, action) {
  switch (action.type) {
    case SET_ALBUMS:
      return action.payload;
    case ADD_ALBUM:
      const album = action.payload;
      return { ...state, ...album };
    default:
      return state;
  }
}

export default albumsReducer;
