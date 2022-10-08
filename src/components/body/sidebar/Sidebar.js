import { Avatar } from '@mui/material';
import React from 'react';
import classes from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar__top}>
        <img src="" alt=""></img>
        <Avatar />
        <h2>Kewin Titus A</h2>
        <h4>Title</h4>
      </div>
      <div className={classes.sidebar__stats}>
        <div className={classes.sidebar__stat}>
          <p className={classes.statName}>Who's viewed your profile</p>
          <p className={classes.statNumber}>1,255</p>
        </div>
        <div className={classes.sidebar__stat}></div>
      </div>
    </div>
  );
};

export default Sidebar;
