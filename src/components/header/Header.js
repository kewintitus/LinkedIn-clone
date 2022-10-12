import React, { useState } from 'react';
import classes from './Header.module.css';

import SearchIcon from '@mui/icons-material/Search';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import HeaderNavOptions from './HeaderNavOptions';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectData, selectUser } from '../../features/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { Avatar } from '@mui/material';

const Header = (props) => {
  const initData = [
    {
      icon: HomeRoundedIcon,
      label: 'Home',

      active: true,
    },
    {
      icon: SupervisorAccountRoundedIcon,
      label: 'Connect',

      active: false,
    },
    {
      icon: WorkRoundedIcon,
      label: 'Jobs',

      active: false,
    },
    {
      icon: SmsIcon,
      label: 'Messaging',

      active: false,
    },
    {
      icon: NotificationsIcon,
      label: 'Notifications',

      active: false,
    },
  ];

  const dispatch = useDispatch();

  const [navData, updateNavData] = useState(initData);
  const navActiveHandler = () => {};

  const user = useSelector(selectUser);
  const userData = useSelector(selectData);

  const logoutHandler = () => {
    dispatch(logout());
    localStorage.removeItem('name');
    localStorage.removeItem('photoUrl');
    localStorage.removeItem('title');
    signOut(auth)
      .then(() => {
        alert('signed out!');
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className={classes.header}>
      <div className={classes['header-left']}>
        <div className={classes['header-left--icon']}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="#0077b5"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
        </div>
        <SearchIcon className={classes[`header-search`]} />
        <input type="text"></input>
      </div>
      <div className={classes['header-right']}>
        {navData.map((data) => (
          <HeaderNavOptions
            icon={data.icon}
            label={data.label}
            navActivate={navActiveHandler}
            active={data.active}
          />
        ))}
        {/* <HeaderNavOptions
          icon={HomeRoundedIcon}
          label="Home"
          onClick={navActiveHandler}
        />
        <HeaderNavOptions icon={SupervisorAccountRoundedIcon} label="Connect" />
        <HeaderNavOptions icon={WorkRoundedIcon} label="Jobs" />
        <HeaderNavOptions icon={SmsIcon} label="Messaging" />
        <HeaderNavOptions icon={NotificationsIcon} label="Notifications" /> */}

        <div className={classes['header-right--nav']}>
          <Avatar
            className={classes.account_icon}
            onClick={logoutHandler}
            src={userData.photoUrl}
          >
            {user.email[0]}
          </Avatar>
          <div className={classes['nav-labelDropdown']}>
            <label>Me</label>
            <ArrowDropDownIcon />
          </div>
        </div>
        <div className={classes.vl}></div>
        <div className={classes['header-right--nav']}>
          <AppsIcon className={classes.nav_icon} />
          <div className={classes['nav-labelDropdown']}>
            <label>Work</label>
            <ArrowDropDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
