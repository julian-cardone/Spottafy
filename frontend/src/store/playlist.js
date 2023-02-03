import { useHistory } from "react-router-dom";
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

export const fetchPlaylists = () => async dispatch => {
  const response = await csrfFetch('/api/playlists');
  const data = await response.json();
  dispatch(setPlaylists(data));
  return response;
};

export const fetchPlaylist = playlistId => async dispatch => {
  const response = await csrfFetch(`/api/playlists/${playlistId}`);
  const data = await response.json();
  dispatch(setPlaylist(data));
  return response;
};

export const createPlaylist = data => async dispatch =>{
  const response = await csrfFetch('/api/playlists',{
    method: 'POST',
    headers: {"Content-Type" : "application/json"},
    body: JSON.stringify(data)
  });
  const data2 = await response.json();
  dispatch(addPlaylist(data2)); 
}

export const updatePlaylist = playlist => async dispatch => {
  const response = await csrfFetch(`/api/playlists/${playlist.id}`,{
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(playlist)
  });
  const data = await response.json();
  debugger 
  dispatch(setPlaylist(data));
  // return response;
};

export const deletePlaylist = playlistId => async dispatch => {
  await csrfFetch(`/api/playlists/${playlistId}`,{
    method: 'DELETE',
  });
  dispatch(removePlaylist(playlistId));
};

const playlistsReducer = (state = {}, action) => {
  switch(action.type){
    case ADD_PLAYLIST:
      return { ...state, new: action.payload}
    case SET_PLAYLIST:
      return { ...state, one: action.payload}
    case SET_PLAYLISTS:
      return { ...state, all: action.payload}
    case REMOVE_PLAYLIST:
      delete state[action.playlistId];
      return state;
    default: 
    return state;
  }
}

export default playlistsReducer;