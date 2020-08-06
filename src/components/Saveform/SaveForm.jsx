import React, { useState } from 'react';
import { useDispatch } from '../../hooks/appContext';
import { newFile } from '../../actions/markdownActions';

export default function SaveForm() {

  const [fileName, setFileName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(newFile(fileName));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={({ target }) => setFileName(target.value)} /> 
        <button >New Mark Down</button>
      </form> 
    </div>
  );
}
