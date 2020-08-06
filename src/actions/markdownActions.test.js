const { setMarkdown, SET_MARKDOWN, newFile, NEW_FILE, deleteFile, DELETE_FILE } = require('./markdownActions');

describe('actions', () => {
  it('it creates an action that updates markdown', () => {
    const action = setMarkdown('sample markdown');
    expect(action).toEqual({
      type: SET_MARKDOWN,
      payload: 'sample markdown'
    });
  });

  it('it creates an action that creates a new file', () => {
    const fileName = 'file 1';
    const action = newFile(fileName);
    expect(action).toEqual({
      type: NEW_FILE,
      payload: {
        id: expect.any(Number),
        fileName,
        body: ''   
      }
    });
  });

  it('it creates an action that deletes a new file', () => {
    const fileId = 1;
    const action = deleteFile(fileId);
    expect(action).toEqual({
      type: DELETE_FILE,
      payload: 1
    });
  });
});
