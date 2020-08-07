const chance = require('chance').Chance();

export const SET_MARKDOWN = 'SET_MARKDOWN';
export const setMarkdown = markdown => ({
  type: SET_MARKDOWN,
  payload: markdown
});

export const NEW_FILE = 'NEW_FILE';
export const newFile = fileName => ({
  type: NEW_FILE,
  payload: {
    id: chance.hammertime(),
    fileName,
    body: ''   
  }
});

export const DELETE_FILE = 'DELETE_FILE';
export const deleteFile = id => ({
  type: DELETE_FILE,
  payload: id
});

export const UPDATE_SEARCH_QUERY = 'UPDATE_SEARCH_QUERY';
export const updateSearchQuery = searchQuery => ({
  type: UPDATE_SEARCH_QUERY,
  payload: searchQuery
});

export const UPDATE_SEARCH_CATEGORY = 'UPDATE_SEARCH_CATEGORY';
export const updateSearchCategory = searchCategory => ({
  type: UPDATE_SEARCH_CATEGORY,
  payload: searchCategory
});

export const UPDATE_CURRENT_ID = 'UPDATE_CURRENT_ID';
export const updateCurrentId = newId => ({
  type: UPDATE_CURRENT_ID,
  payload: newId
});

export const SET_INITIAL_STATE = 'SET_INITIAL_STATE';
export const setInitialState = localStorage => ({
  type: SET_INITIAL_STATE,
  payload: localStorage
});
