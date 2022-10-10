import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import classes from './Post.module.css';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Post = (props) => {
  return (
    <div className={classes.post}>
      <div className={classes.post_header}>
        <div className={classes.post_userDetails}>
          <Avatar />
          <div className={classes.post_userDescription}>
            <h4>User name</h4>
            <h5>User title</h5>
          </div>
        </div>
        <div className={classes.post_connect}>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </div>
      </div>
      <div className={classes.post_content}>
        <p>message</p>
      </div>
      <div className={classes.post_footer}>
        <div className={classes.post_footer__actions}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
          </svg>

          <p>Like</p>
        </div>
        <div className={classes.post_footer__actions}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
          </svg>

          <p>Comment</p>
        </div>
        <div className={classes.post_footer__actions}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.96 5H6C5.45 5 5 5.45 5 6V16H3V6C3 4.34 4.34 3 6 3H13.96L12 0H14.37L17 4L14.37 8H12L13.96 5ZM19.5 8H19V18C19 18.55 18.55 19 18 19H10.04L12 16H9.63L7 20L9.63 24H12L10.04 21H18C19.66 21 21 19.66 21 18V8H19.5Z"></path>
          </svg>

          <p>Repost</p>
        </div>
        <div className={classes.post_footer__actions}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
          </svg>

          <p>Send</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
