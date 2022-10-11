import React from 'react';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import classes from './Advertisement.module.css';
import { Avatar } from '@mui/material';

const Advertisement = () => {
  return (
    <div className={classes.ad}>
      <div className={classes.ad_badgeContainer}>
        <div className={classes.ad_badge}>
          <p>Ad</p>
          <MoreHorizIcon />
        </div>
      </div>
      <div className={classes.adHeaderContainer}>
        <p className={classes.adHeader}>
          Let us keep you updated with the latest in software development
        </p>
      </div>
      <div className={classes.adContentContainer}>
        <Avatar className={classes.adIcon}></Avatar>
        <svg
          className={classes.adIcon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-11.5 -10.23174 23 20.46348"
        >
          <title>React Logo</title>
          <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
          <g stroke="#61dafb" stroke-width="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      </div>
      <div className={classes.adOfferContainer}>
        <p className={classes.adOffer}>
          Enjoy 50% off 2 months of LinkedIn Premium
        </p>
      </div>
      <div className={classes.adOfferActionContainer}>
        <p className={classes.adOfferAction}>Get 50% off today</p>
      </div>
    </div>
  );
};

export default Advertisement;
