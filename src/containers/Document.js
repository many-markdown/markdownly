import React from 'react';
import Preview from '../components/markdown/Preview.jsx';
import Editor from '../components/markdown/Editor.jsx';
import styles from './Document.css';
import FileList from '../components/fileList/FileList.jsx';

export default function Document() {

  return (
    <>
      <div className={styles.Document}>
        <FileList />
        <Editor />
        <Preview />
      </div>
    </>
  );
}
