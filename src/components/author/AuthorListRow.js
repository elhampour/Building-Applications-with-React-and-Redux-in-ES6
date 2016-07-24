import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const AuthorListRow = ({author, onClickDelete}) => {
  function onClick(event) {
    event.preventDefault();
    onClickDelete(author.id);
  }

  return (
    <tr>
      <td>{author.id}</td>
      <td><Link to={'/author/' + author.id}>{author.firstName + " " + author.lastName}</Link></td>
      <td><a href="#" onClick={onClick}>Delete</a></td>
    </tr>
  );
}

AuthorListRow.propTypes = {
  author: PropTypes.object.isRequired,
  onClickDelete: PropTypes.func.isRequired
};

export default AuthorListRow;
