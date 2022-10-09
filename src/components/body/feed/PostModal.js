import { Avatar } from '@mui/material';
import React from 'react';
import classes from './PostModal.module.css';

const PostModal = () => {
  return (
    <div className={classes.postModal}>
      <div className={classes.modalWindow}>
        <div className={classes.modalHeader}>
          <h2>Create a post</h2>
        </div>
        <div className={classes.user_details}>
          <div>
            <Avatar />
          </div>
          <div></div>
        </div>
        <div className={classes.textArea}></div>
        <div className={classes.actions}></div>
      </div>
    </div>
  );
};

export default PostModal;
