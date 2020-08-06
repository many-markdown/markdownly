import React from 'react';
import styles from './Editor.css';
import { useDispatch } from '../../hooks/appContext';
import { setMarkdown } from '../../actions/markdownActions';
import { useSelector } from '../../hooks/appContext';
import { getMarkdown } from '../../selectors/appSelectors';

const Editor = () => {
  const dispatch = useDispatch();
  const markdown = useSelector(getMarkdown);

  return (
    <textarea className={styles.Editor} value={markdown} onChange={({ target }) => dispatch(setMarkdown(target.value))} />
  );

};
  
export default Editor;
 
