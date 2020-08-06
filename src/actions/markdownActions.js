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
