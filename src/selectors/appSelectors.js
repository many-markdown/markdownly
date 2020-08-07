import marked from 'marked';

export const getMarkdown = state => {
  const { body } = state.markdownFileList.find(item => item.id === state.currentId);
  return body;
};
export const getAllMarkdownFiles = state => state.markdownFileList;

export const getSearchedFiles = state => state.markdownFileList.filter(item => 
{
  if(!state.searchQuery) return item;
  return item[state.searchCategory].includes(state.searchQuery);
});

export const getMarkdownPreview = state => {
  return marked(getMarkdown(state));
};
