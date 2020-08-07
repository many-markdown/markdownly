import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from '../../hooks/appContext';
import { getSearchedFiles } from '../../selectors/appSelectors';
import  DeleteButton  from '../DeleteButton/DeleteButton';
import SaveForm from '../Saveform/Saveform';
import FileSearcher from '../FileSearcher/FileSearcher';
import { updateCurrentId } from '../../actions/markdownActions';

export default function FileList() {
  const markdownFileList = useSelector(getSearchedFiles);
  const dispatch = useDispatch();
  const listElement = markdownFileList.map(({ fileName, id }, i) => {
    return (
      <li key={i} >
        <Link to={`/document/${id}`} onClick={() => dispatch(updateCurrentId(id))}>{fileName}</Link>
        <DeleteButton id={id}/>
      </li>
    );
  });
  return (
    <>
      <FileSearcher />
      <ul>
        {listElement}
      </ul>
      <SaveForm />
    </>
  );
}
