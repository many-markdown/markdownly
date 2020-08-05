import React from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.css';
import { useDispatch } from '../../hooks/appContext';
import { setMarkdown } from '../../actions/markdownActions';
import { useSelector } from '../../hooks/appContext';
import { getMarkdown } from '../../selectors/appSelectors';

const Editor = () => {
  const dispatch = useDispatch();
  const markdown = useSelector(getMarkdown);

  return (
    <textarea className={styles.Editor} value={markdown} onChange={() => dispatch(setMarkdown())} />
  );

};
  

// Editor.propTypes = {
//   markdown: PropTypes.string.isRequired,
//   updateMarkdown: PropTypes.func.isRequired
// };

export default Editor;
 
