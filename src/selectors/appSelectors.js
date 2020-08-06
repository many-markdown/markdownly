import marked from 'marked';

export const getMarkdown = state => {
  const { body } = state.markdownFileList.find(item => item.id === state.currentId);
  return body;
};
export const getAllMarkdownFiles = state => state.markdownFileList;

export const getMarkdownPreview = state => {
  return marked(getMarkdown(state));
};


// click file -> opens new page with id in url -> useParams grabs id -> getMarkdown gets the file from array by id
