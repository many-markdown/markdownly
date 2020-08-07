import React from 'react';
import { useDispatch } from '../../hooks/appContext';
import { updateSearchQuery, updateSearchCategory } from '../../actions/markdownActions';


function FileSearcher() {
  const dispatch = useDispatch();
  
  return (
    <div>
      <input type='text' onChange={({ target }) => dispatch(updateSearchQuery(target.value))}/>
      <select onChange={({ target }) => dispatch(updateSearchCategory(target.value))}>
        <option value='fileName'>File Name</option>
        <option value='body'>Body</option>
      </select>
    </div>
  );
}

export default FileSearcher;

