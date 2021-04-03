import React from 'react';
import CategoryList from '../categoryList/categoryList.jsx';

const AllCateogryList = (tasks) => {
  const users = {};
  if (tasks) {
    for (let i = 0; i < tasks.length; i++) {
      if (users[tasks[i].user_id] === undefined) {
        users[tasks[i].user_id] = 1;
      }
    }
    console.log(users);
  }

  return (
    <div>
      {tasks.length === 0 ? null : 'we have a list of tasks'}
      {/* <CategoryList />
      <CategoryList />
      <CategoryList /> */}
    </div>
  )
}

export default AllCateogryList;
