import React from 'react';
import {connect} from 'react-redux';
import AuthorForm from './AuthorForm';

export class ManageAuthorPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h1>Course Form</h1>
        <AuthorForm
          onChange = {this.updateCourseState}
          onSave = {this.saveCourse}
          author={this.state.athor}
          errors={this.state.errors}
          saving={this.state.saving}/>
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
