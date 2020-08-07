import React from 'react';
import styles from './Editor.css';
import { useDispatch } from '../../hooks/appContext';
import { setMarkdown } from '../../actions/markdownActions';
import { useSelector } from '../../hooks/appContext';
import { getMarkdown, getAllMarkdownFiles } from '../../selectors/appSelectors';

const Editor = () => {
  const dispatch = useDispatch();
  const markdown = useSelector(getMarkdown);
  const allMarkdownFiles = useSelector(getAllMarkdownFiles);

  const handleChange = ({ target }) => {
    dispatch(setMarkdown(target.value));
    localStorage.setItem('FILE_STORAGE', JSON.stringify(allMarkdownFiles));
  };

  return (
    <>
      <textarea className={styles.Editor} value={markdown} onChange={handleChange} />
      <button onClick={() => localStorage.setItem('FILE_STORAGE', JSON.stringify(allMarkdownFiles))} >Save</button>
    </>
  );

};
  
export default Editor;
 
