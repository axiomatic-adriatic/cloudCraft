import React from 'react';
import Task from '../task/task';
import styles from './categoryList.css';

const CategoryList = ({categoryName, tasks, bgColor, textColor, add}) => {
  const list = tasks.map((task) => <Task task={task} key={task.task_id} />);
  return (
    <div className={styles.categoryList}>
      <h3 style={{backgroundColor: bgColor, color: textColor}}>
         {categoryName}
        {add ? <span className={styles.addTask}>&#10133;</span> : null}
      </h3>
      <div className={styles.scrollList}>{list}</div>
    </div>
  );
};

export default CategoryList;
