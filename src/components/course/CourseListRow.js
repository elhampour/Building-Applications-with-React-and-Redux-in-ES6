import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CourseListRow = ({course,onClickDelete}) => {
  return (
    <tr>
      <td><a href={course.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
      <td><a href="#" onClick={() => onClickDelete(course.id)}>Delete</a></td>
    </tr>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired,
  onClickDelete : PropTypes.func.isRequired
};

export default CourseListRow;
