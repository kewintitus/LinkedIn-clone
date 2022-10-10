import React from 'react';
import feed from './Feed.module.css';
import FeedInput from './FeedInput';
import classes from './Feed.module.css';
import Post from './Post';

const Feed = (props) => {
  return (
    <div className={classes.feed}>
      <FeedInput />
      <Post />
    </div>
  );
};

export default Feed;
