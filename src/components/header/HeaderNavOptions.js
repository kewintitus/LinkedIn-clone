import React from 'react';
import classes from './HeaderNavOptions.module.css';

const HeaderNavOptions = (props) => {
  return (
    <div className={classes['header-right--nav']}>
      {<props.icon className={classes.nav_icon} />}
      <label>{props.label}</label>
    </div>
  );
};

export default HeaderNavOptions;
