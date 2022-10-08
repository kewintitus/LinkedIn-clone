import { Avatar } from '@mui/material';
import React from 'react';
import classes from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar__top}>
        <img src="https://wallpaperaccess.com/full/187161.jpg" alt=""></img>
        <Avatar className={classes.sidebarAvatar} />
        <h2>Kewin Titus A</h2>
        <h4>Title</h4>
      </div>

      <div className={classes.sidebar__stats}>
        <div className={classes.sidebar__stat}>
          <p className={classes.statName}>Who's viewed your profile</p>
          <p className={classes.statNumber}>1,255</p>
        </div>
        <div className={classes.sidebar__stat}>
          <p className={classes.statName}>Connections</p>
          <p className={classes.statNumber}>12,057</p>
        </div>
      </div>

      <div className={classes.sidebar__bottom}>
        <div className={classes.sidebar__premium}>
          <p className={classes.sidebar__premiumInfo}>
            Access exclusive tools and insights
          </p>
          <div className={classes.activatePremium}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path
                d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                fill="#f8c77e"
              ></path>
              <path
                d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                fill="#e7a33e"
              ></path>
            </svg>
            <p>Reactivate premium</p>
          </div>
        </div>
        <div className={classes.myItems}>
          <div className={classes.myItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              class="mercado-match"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M13 4a3 3 0 00-3-3H3v14l5-4.5 5 4.5z"></path>
            </svg>
            <p>My items</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
