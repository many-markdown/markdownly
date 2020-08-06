import marked from 'marked';
export const getMarkdown = state => state.markdown;

export const getAllMarkdownFiles = state => state.markdownFileList;

export const getMarkdownPreview = state => {
  return marked(getMarkdown(state));
};
