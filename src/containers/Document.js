import React, { useState } from 'react';
import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import styles from './Document.css';

export default function Document() {
  
  const [markdown, setMarkdown] = useState('# Hi there');

  const updateMarkdown = ({ target }) => {
    setMarkdown(target.value);
  };

  return (
    <>
      <div className={styles.Document}>
        {/* <Editor markdown={markdown} updateMarkdown={updateMarkdown} /> */}
        <Editor />
        <Preview />

        {/* <Preview markdown={markdown} /> */}
      </div>
    </>
  );
}
