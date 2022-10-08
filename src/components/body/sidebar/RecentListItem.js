import React from 'react';
import classes from './RecentListItem.module.css';

const RecentListItem = (props) => {
  console.log(props);
  return (
    <div className={classes.listItem}>
      {<props.icon className={classes.icon} />}
      <p>{props.text}</p>
    </div>
  );
};

export default RecentListItem;
