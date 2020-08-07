import React from 'react';
import { useSelector } from '../../hooks/appContext';
import { getSearchedFiles } from '../../selectors/appSelectors';
import  DeleteButton  from '../DeleteButton/DeleteButton';
import SaveForm from '../Saveform/Saveform';
import FileSearcher from '../FileSearcher/FileSearcher';

export default function FileList() {
  const markdownFileList = useSelector(getSearchedFiles);
  const listElement = markdownFileList.map(({ fileName, id }, i) => {
    return (
      <li key={i} >
        {fileName}
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
