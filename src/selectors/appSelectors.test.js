const { getMarkdown, getMarkdownPreview } = require('./appSelectors');

describe('markdown selectors', () => {
  it('returns the markdown stored in state', () => {
    const state = {
      markdown: '# hello there'
    };

    const markdown = getMarkdown(state);
    expect(markdown).toEqual('# hello there');
  });

  it('creates a preview of the markdown', () => {
    const state = {
      markdown: '# hello there'
    };
    
    const markdown = getMarkdownPreview(state);
    expect(markdown).toEqual(expect.any(String));
  }); 
});
