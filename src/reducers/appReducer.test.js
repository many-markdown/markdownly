const { setMarkdown, newFile, deleteFile, updateSearchQuery, updateSearchCategory, updateCurrentId } = require('../actions/markdownActions');
import reducer from './appReducer';

describe('app reducer', () => {
  it('handles the SET_MARKDOWN action', () => {
    const state = {
      currentId: 1,
      markdownFileList: [{
        id: 1,
        fileName: 'default',
        body: '# hello there'
      }]
    };
    const action = setMarkdown('the action');
    const newState = reducer(state, action);

    expect(newState).toEqual({
      currentId: 1,
      markdownFileList: [{
        id: 1,
        fileName: 'default',
        body: 'the action'
      }]
    });
    
  });

  it('it handles the NEW_FILE action', () => {
    const state = {
      currentId: 1,
      markdownFileList: [{
        id: 1,
        fileName: 'default',
        body: '# hello there'
      }]
    };

    const action = newFile('fileName');
    const newState = reducer(state, action);
    expect(newState).toEqual({
      currentId: 1,
      markdownFileList: [{
        id: 1,
        fileName: 'default',
        body: '# hello there'
      },
      {
        id: expect.any(Number),
        fileName: 'fileName',
        body: ''
      }]
    });
  });

  it('it handles the DELETE_FILE action', () => {
    const state = {
      currentId: 1,
      markdownFileList: [
        {
          id: 1,
          fileName: 'default1',
          body: '# hello there'
        },
        {
          id: 2,
          fileName: 'default2',
          body: '# hello there'
        }]
    };

    const action = deleteFile(2);
    const newState = reducer(state, action);

    expect(newState).toEqual({
      currentId: 1,
      markdownFileList: [{
        id: 1,
        fileName: 'default1',
        body: '# hello there'
      }]
    });
  });

  it('it handles the UPDATE_SEARCH_QUERY action', () => {
    const state = {
      currentId: 1,
      searchQuery: '',
      searchCategory: 'fileName',
      markdownFileList: [
        {
          id: 1,
          fileName: 'default1',
          body: '# hello there'
        }]
    };

    const action = updateSearchQuery('default1');
    const newState = reducer(state, action);

    expect(newState).toEqual({
      currentId: 1,
      searchQuery: 'default1',
      searchCategory: 'fileName',
      markdownFileList: [{
        id: 1,
        fileName: 'default1',
        body: '# hello there'
      }]
    });
  });

  it('it handles the UPDATE_SEARCH_QUERY action', () => {
    const state = {
      currentId: 1,
      searchQuery: '',
      searchCategory: 'fileName',
      markdownFileList: [
        {
          id: 1,
          fileName: 'default1',
          body: '# hello there'
        }]
    };

    const action = updateSearchCategory('body');
    const newState = reducer(state, action);

    expect(newState).toEqual({
      currentId: 1,
      searchQuery: '',
      searchCategory: 'body',
      markdownFileList: [{
        id: 1,
        fileName: 'default1',
        body: '# hello there'
      }]
    });
  });

  it('it handles the UPDATE_CURRENT_ID action', () => {
    const state = {
      currentId: 1,
      searchQuery: '',
      searchCategory: 'fileName',
      markdownFileList: [
        {
          id: 1,
          fileName: 'default1',
          body: '# hello there'
        }]
    };

    const action = updateCurrentId(2);
    const newState = reducer(state, action);

    expect(newState).toEqual({
      currentId: 2,
      searchQuery: '',
      searchCategory: 'fileName',
      markdownFileList: [{
        id: 1,
        fileName: 'default1',
        body: '# hello there'
      }]
    });
  });
});
