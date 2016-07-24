import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authorActions from '../../actions/authorAction';
import AuthorList from './AuthorList';
import {browserHistory} from 'react-router';
import toastr from 'toastr';

class AuthorsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddAuthorPage = this.redirectToAddAuthorPage.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
  }

  courseRow(author, index) {
    return <div key={index}>{author.firstName + " " + author.lastName}</div>;
  }

  redirectToAddAuthorPage() {
    browserHistory.push('/author');
  }

  finishDelete() {
    toastr.success('Author deleted.');
  }

  onClickDelete(authorId) {
    this.props.actions.deleteAuthor(authorId)
      .then(()=> {
        this.finishDelete();
      })
      .catch(error => {
        toastr.error(error);
      });
  }

  render() {
    const {authors} = this.props;
    return (
      <div>
        <h1>Authors</h1>
        <input type="submit"
               value="Add Author"
               className="btn btn-primary"
               onClick={this.redirectToAddAuthorPage}/>
        <AuthorList authors={authors} onClickDelete={this.onClickDelete}/>
      </div>
    );
  }
}

AuthorsPage.propTypes = {
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    authors: state.authors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);
