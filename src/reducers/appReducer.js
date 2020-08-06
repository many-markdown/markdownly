import { SET_MARKDOWN } from '../actions/markdownActions';

export const initialState = {
  markdown: '# hello there',
  markdownFileList: []
};

export default function reducer(state, action) {
  switch(action.type){
    case SET_MARKDOWN:
      return { ...state, markdown: action.payload };
    default:
      return state;
  }
}
