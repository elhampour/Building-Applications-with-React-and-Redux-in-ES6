import React from 'react';
import {connect} from 'react-redux';

export class ManageAuthorPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h1>Course Form</h1>
      </div>
    );
  }
}


function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorPage);
