import React from 'react';
import { useDispatch } from '../../hooks/appContext';
import { deleteFile } from '../../actions/markdownActions';

export default function DeleteButton() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(deleteFile)}></button>
    </div>
  );
}
