import React from 'react';
import Task from '../task/task.jsx';

const dummyData = [{task_id: 1, message_id: 7, user_id: 7, task_text: 'aslidfjlsdiajfla', datetime: '2022-01-05 18:40:10', completed: false}];

const CategoryList = () => {
  return (
    <div>
        <Task />
    </div>
  );
};

export default CategoryList;
