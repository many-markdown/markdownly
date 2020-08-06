import React from 'react';
import { useSelector } from '../../hooks/appContext';
import { getAllMarkdownFiles } from '../../selectors/appSelectors';

export default function FileList() {

  const markdownFileList = useSelector(getAllMarkdownFiles);
  const listElement = markdownFileList.map(({ fileName }, i) => {
    return (
      <li key={i} >
        {fileName}
      </li>
    );
  });
  return (
    <ul>
      {listElement}
    </ul>
  );
}
