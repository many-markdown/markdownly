const { getMarkdown, getMarkdownPreview, getAllMarkdownFiles } = require('./appSelectors');

describe('markdown selectors', () => {
  it('returns the markdown stored in state', () => {
    const state =   {
      currentId: 1,
      markdownFileList: [{
        id: 1,
        fileName: 'default',
        body: '# hello there'
      }]
    };
    const markdown = getMarkdown(state);
    expect(markdown).toEqual('# hello there');
  });

  it('returns the list of markdown files stored in state', () => {
    const state = {
      currentId: 1,
      markdownFileList: [{
        id: 1,
        fileName: 'first_file',
        body: '# hello there'
      }]
    };

    const allMarkdownFiles = getAllMarkdownFiles(state);
    expect(allMarkdownFiles).toEqual([{
      id: 1,
      fileName: 'first_file',
      body: '# hello there'
    }]);
  });

  it('creates a preview of the markdown', () => {
    const state = {
      currentId: 1,
      markdownFileList: [{
        id: 1,
        fileName: 'first_file',
        body: '# hello there'
      }]
    };
    
    const markdown = getMarkdownPreview(state);
    expect(markdown).toEqual(expect.any(String));
  }); 
});
