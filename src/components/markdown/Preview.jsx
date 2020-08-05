import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import styles from 'github-markdown-css/github-markdown.css';
import { useSelector } from '../../hooks/appContext';
import { getMarkdown } from '../../selectors/appSelectors';

const Preview = () => {
  const markdown = useSelector(getMarkdown);
  const __html = marked(markdown);
  return <div className={styles['markdown-body']} dangerouslySetInnerHTML={{ __html }}></div>;
};

// Preview.propTypes = {
//   markdown: PropTypes.string.isRequired
// };

export default Preview;
