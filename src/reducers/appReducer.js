import { SET_MARKDOWN } from '../actions/markdownActions';

export const initialState = {
  currentId: 1,
  markdownFileList: [{
    id: 1,
    fileName: 'default',
    body: '# hello there'
  }]
};

export default function reducer(state, action) {
  switch(action.type){
    case SET_MARKDOWN:
      return { ...state, markdown: action.payload };
    default:
      return state;
  }
}
