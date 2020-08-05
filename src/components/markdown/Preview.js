import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import styles from 'github-markdown-css/github-markdown.css';

const Preview = ({ markdown }) => {
  const __html = marked(markdown);
  return <div className={styles['markdown-body']} dangerouslySetInnerHTML={{ __html }}></div>;
};

Preview.propTypes = {
  markdown: PropTypes.string.isRequired
};

export default Preview;
