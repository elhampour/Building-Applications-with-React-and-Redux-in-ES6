import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function updateAuthorSuccess(author) {
  return {type: types.UPDATE_AUTHOR_SUCCESS, author};
}

export function createAuthorSuccess(author) {
  return {type: types.CREATE_AUTHOR_SUCCESS, author};
}

export function deleteAurhorSuccess(authorId) {
  return {type: types.DELETE_AUTHOR_SUCCESS, authorId};
}

export function loadAuthors() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors()
      .then(authors => {
        dispatch(loadAuthorsSuccess(authors));
      }).catch(error => {
        throw(error);
      });
  };
}

export function saveAuthor(author) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return AuthorApi.saveAuthor(author).then(author => {
      author.id ? dispatch(updateAuthorSuccess(author)) :
        dispatch(createAuthorSuccess(author));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function deleteAuthor(authorId) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return AuthorApi.deleteAuthor(authorId)
      .then(authorId => {
        dispatch(deleteAurhorSuccess(authorId));
      }).catch(error => {
        dispatch(ajaxCallError(error));
        throw(error);
      });
  };
}

