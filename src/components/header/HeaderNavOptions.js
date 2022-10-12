import React from 'react';
import classes from './HeaderNavOptions.module.css';

const HeaderNavOptions = (props) => {
  console.log(props);

  const setTabActive = () => {
    props.navActivate(props.id);
  };

  return (
    <div className={classes['header-right--nav']} onClick={setTabActive}>
      {
        <props.icon
          className={`${classes.nav_icon} ${props.active && classes.active}`}
        />
      }
      <label className={`${props.active && classes.active}`}>
        {props.label}
        <hr className={`${props.active && classes.active}`}></hr>
      </label>
    </div>
  );
};

export default HeaderNavOptions;
