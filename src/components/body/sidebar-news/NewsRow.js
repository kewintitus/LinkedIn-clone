import React from 'react';
import classes from './NewsRow.module.css';

const NewsRow = (props) => {
  return (
    <div className={classes.newsRow}>
      <li></li>
      <div>
        <div className={classes.newsRow_headline}>{props.title}</div>
        <div className={classes.newsRow_postDate}>{props.postedOn}</div>
      </div>
    </div>
  );
};

export default NewsRow;
