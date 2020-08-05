const { getMarkdown } = require('./appSelectors');

describe('markdown selectors', () => {
  it('returns the markdown stored in state', () => {
    const state = {
      markdown: '# hello there'
    };

    const markdown = getMarkdown(state);

    expect(markdown).toEqual('# hello there');
  });
  
});
