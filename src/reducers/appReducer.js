import { SET_MARKDOWN, NEW_FILE, DELETE_FILE, UPDATE_SEARCH_QUERY, UPDATE_SEARCH_CATEGORY } from '../actions/markdownActions';

export const initialState = {
  currentId: 1,
  searchQuery: '',
  searchCategory: 'fileName',
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
    case NEW_FILE:
      return { ...state, markdownFileList: [...state.markdownFileList, action.payload] };
    case DELETE_FILE:
      return { ...state, markdownFileList: state.markdownFileList.filter(item => item.id !== action.payload) };
    case UPDATE_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload };
    case UPDATE_SEARCH_CATEGORY:
      return { ...state, searchCategory: action.payload };
    default:
      return state;
  }
}
