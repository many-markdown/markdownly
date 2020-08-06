import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from '../../hooks/appContext';
import { deleteFile } from '../../actions/markdownActions';

export default function DeleteButton({ id }) {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(deleteFile(id))}></button>
    </div>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.number.isRequired
};

