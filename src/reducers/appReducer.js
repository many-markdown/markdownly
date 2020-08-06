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
      
      return {
        ...state, markdownFileList: state.markdownFileList.map(item => {
          if(item.id !== state.currentId) return item;
          return { ...item, body:action.payload };
        }) };
    default:
      return state;
  }
}
