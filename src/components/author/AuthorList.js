import React, {PropTypes} from 'react';
import AuthorListRow from './AuthorListRow';

const AuthorList = ({authors, onClickDelete}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Id</th>
        <th>Full Name</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      {authors.map(author=>
        <AuthorListRow key={author.id} author={author} onClickDelete={onClickDelete}/>
      )}
      </tbody>
    </table>
  );
}

AuthorList.propTypes = {
  authors: PropTypes.array.isRequired,
  onClickDelete: PropTypes.func.isRequired
};

export default AuthorList;
