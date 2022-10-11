import React from 'react';
import classes from './AppFooter.module.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AppFooter = () => {
  return (
    <div className={classes.footerOptions}>
      <div className={classes.footerOption}>
        <p>About</p>
      </div>
      <div className={classes.footerOption}>
        <p>Accessibility</p>
      </div>
      <div className={classes.footerOption}>
        <p>Help Center</p>
      </div>
      <div className={classes.footerOption}>
        <p>Privacy Terms</p>
        <ExpandMoreIcon />
      </div>
      <div className={classes.footerOption}>
        <p>Ad Choices</p>
      </div>
      <div className={classes.footerOption}>
        <p>Advertising</p>
      </div>
      <div className={classes.footerOption}>
        <p>Business Services</p>
        <ExpandMoreIcon />
      </div>
      <div className={classes.footerOption}>
        <p>Get LinkedIn App</p>
      </div>
      <div className={classes.footerOption}>
        <p>More</p>
      </div>
    </div>
  );
};

export default AppFooter;
