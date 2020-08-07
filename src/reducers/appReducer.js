import { SET_MARKDOWN, 
  NEW_FILE, DELETE_FILE, 
  UPDATE_SEARCH_QUERY, 
  UPDATE_SEARCH_CATEGORY,
  UPDATE_CURRENT_ID,
  SET_INITIAL_STATE } from '../actions/markdownActions';

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
    case UPDATE_CURRENT_ID:
      return { ...state, currentId: action.payload };
    case SET_INITIAL_STATE:
      return { ...state, markdownFileList: action.payload };
    default:
      return state;
  }
}
