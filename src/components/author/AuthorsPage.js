import React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

class AuthorsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  redirectToAddAuthorPage() {
    browserHistory.push('/author');
  }

  render() {
    return (
      <div>
        <h1>Authors</h1>
        <input type="submit"
               value="Add Author"
               className="btn btn-primary"
               onClick={this.redirectToAddAuthorPage}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}


export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);
