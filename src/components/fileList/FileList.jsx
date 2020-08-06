import React from 'react';

export default function FileList() {

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
