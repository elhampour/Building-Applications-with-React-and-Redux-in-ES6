import React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import AuthorList from './AuthorList';

class AuthorsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  redirectToAddAuthorPage() {
    browserHistory.push('/author');
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
        <AuthorList authors={authors}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  debugger;
  return {
    authors: state.authors
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);
