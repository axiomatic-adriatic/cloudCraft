import React from 'react';
import styles from './mainApp.css';

class MainApp extends React.Component {
  constructor(props) {
    super(props)

  }

  render(){
    return(
      <div className={styles.parent}>
        <div className={styles.div4}>
            <h1>Search Bar</h1>
        </div>
        <div className={styles.div1}>
        <h1>Search Bar</h1>
        </div>
        <div className={styles.div2}>
        <h1>Search Bar</h1>
        </div>
        <div className={styles.div3}>
        <h1>Search Bar</h1>
        </div>
        {/* <Userlist className={styles.div1} />
        <Message  className={styles.div2}/>
        <TaskList className={styles.div3}/> */}
      </div>
    )
  }
}

export default MainApp