import React from 'react';
import { useSelector } from '../../hooks/appContext';
import { getAllMarkdownFiles } from '../../selectors/appSelectors';
import  DeleteButton  from '../DeleteButton/DeleteButton';
import SaveForm from '../Saveform/Saveform';

export default function FileList() {
  const markdownFileList = useSelector(getAllMarkdownFiles);
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
      <ul>
        {listElement}
      </ul>
      <SaveForm />
    </>
  );
}
