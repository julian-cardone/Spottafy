import csrfFetch from "./csrf.js";

const SET_ARTISTS = 'artists/setArtists';
const ADD_ARTIST = 'artists/addArtist';

export const setArtists = artists => ({
  type: SET_ARTISTS,
  payload: artists
});

export const addArtist = artist => ({
  type: ADD_ARTIST,
  payload: artist
});

export const fetchArtists = () => async dispatch => {
  const response = await csrfFetch(`/api/artists`);
  const data = await response.json();
  dispatch(setArtists(data));
  return response;
};

export const fetchArtist = artistId => async dispatch => {
  const response = await csrfFetch(`/api/artists/${artistId}`);
  const data = await response.json();
  dispatch(addArtist(data));
  return response;
}

function artistsReducer(state = {}, action) {
  switch (action.type) {
    case SET_ARTISTS:
      return action.payload;
    case ADD_ARTIST:
      const artist = action.payload;
      return { ...state, artist: artist };
    default:
      return state;
  }
}

export default artistsReducer;