import csrfFetch from "./csrf";

const ADD_PLAYLIST = "playlists/addPlaylist";
const SET_PLAYLIST = "playlists/setPlaylist";
const SET_PLAYLISTS = "playlists/setPlaylists";
const REMOVE_PLAYLIST = "playlists/removePlaylist";

const addPlaylist = (playlist) => ({
  type: ADD_PLAYLIST,
  payload: playlist,
});

const setPlaylists = playlists =>({
  type: SET_PLAYLISTS, 
  payload: playlists
})

const setPlaylist = playlist =>({
  type: SET_PLAYLIST, 
  payload: playlist
})

const removePlaylist = playlist =>({
  type: REMOVE_PLAYLIST, 
  payload: playlist
})

export const fetchPlaylist = () => async dispatch => {
  const response = await csrfFetch('/api/playlists');
  const data = await response.json();
  dispatch(setPlaylist(data));
  return response;
};