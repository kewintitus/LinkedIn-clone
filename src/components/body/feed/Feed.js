import React from 'react';
import feed from './Feed.module.css';
import FeedInput from './FeedInput';
import classes from './Feed.module.css';

const Feed = (props) => {
  return (
    <div className={classes.feed}>
      <FeedInput />
    </div>
  );
};

export default Feed;
