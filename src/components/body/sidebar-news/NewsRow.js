import React from 'react';
import classes from './NewsRow.module.css';

const NewsRow = (props) => {
  return (
    <div className={classes.newsRow}>
      <li></li>
      <div>
        <div className={classes.newsRow_headline}>
          Here are the top 22 startups of 2022
        </div>
        <div className={classes.newsRow_postDate}>1d ago </div>
      </div>
    </div>
  );
};

export default NewsRow;
