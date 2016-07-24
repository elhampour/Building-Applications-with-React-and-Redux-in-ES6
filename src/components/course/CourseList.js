import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses, onClickDelete}) => {
  const hasNoCourses = courses.length == 0;
  const tableClassName = hasNoCourses ? "table hidden" : "table";
  return (
    <table className={tableClassName}>
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      {courses.map(course =>
        <CourseListRow key={course.id} course={course} onClickDelete={onClickDelete}/>
      )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  onClickDelete: PropTypes.func.isRequired
};

export default CourseList;
