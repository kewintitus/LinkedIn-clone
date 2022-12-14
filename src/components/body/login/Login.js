import * as React from 'react';
import { useRef, useState } from 'react';
import classes from './Login.module.css';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../../firebase/firebase';
import { login, logout, updateDisplayData } from '../../../features/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
  const name = useRef();
  const email = useRef();
  const photoUrl = useRef();
  const password = useRef();
  const title = useRef();

  const dispatch = useDispatch();

  const demoLogin = () => {
    dispatch(
      updateDisplayData({
        name: 'Kewin Titus A',
        photoUrl:
          'https://media-exp1.licdn.com/dms/image/C5103AQEKGzVXlBO-0g/profile-displayphoto-shrink_100_100/0/1570522393765?e=1671062400&v=beta&t=vaSJhRQC_jdPRSs1OiI-AvxXazCvaVUV5DWIgbfLBxI',
        title: 'Full-stack developer',
      })
    );

    localStorage.setItem('name', 'Kewin Titus A');
    localStorage.setItem(
      'photoUrl',
      'https://media-exp1.licdn.com/dms/image/C5103AQEKGzVXlBO-0g/profile-displayphoto-shrink_100_100/0/1570522393765?e=1671062400&v=beta&t=vaSJhRQC_jdPRSs1OiI-AvxXazCvaVUV5DWIgbfLBxI'
    );
    localStorage.setItem('title', 'Full-stack developer');

    signInWithEmailAndPassword(auth, 'kewintitus@gmail.com', '87654321')
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        console.log('loginsuccess');

        dispatch(
          login({
            email: user.email,
            uid: user.uid,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode}: ${errorMessage}`);
        alert(`${errorCode}: ${errorMessage}`);
      });
  };

  const loginHandler = () => {
    if (
      email.current.value.toString() === '' ||
      password.current.value.toString() === '' ||
      name.current.value.toString() === ''
    ) {
      alert('Name, email and password fields must be filled');
      return;
    }

    localStorage.setItem('name', name.current.value.toString());
    localStorage.setItem('photoUrl', photoUrl.current.value.toString());
    localStorage.setItem('title', title.current.value.toString());

    dispatch(
      updateDisplayData({
        name: name.current.value.toString(),
        photoUrl: photoUrl.current.value.toString(),
        title: title.current.value.toString(),
      })
    );

    signInWithEmailAndPassword(
      auth,
      email.current.value.toString(),
      password.current.value.toString()
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        console.log('loginsuccess');

        dispatch(
          login({
            email: user.email,
            uid: user.uid,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode}: ${errorMessage}`);
        alert(`${errorCode}: ${errorMessage}`);
      });
  };

  const registerHandler = () => {
    if (
      name.current.value.toString() === '' ||
      email.current.value.toString() === '' ||
      password.current.value.toString() === ''
    ) {
      alert('Name, email and password fields must be filled');
      return;
    }

    localStorage.setItem('name', name.current.value.toString());
    localStorage.setItem('photoUrl', photoUrl.current.value.toString());
    localStorage.setItem('title', title.current.value.toString());
    dispatch(
      updateDisplayData({
        name: name.current.value.toString(),
        photoUrl: photoUrl.current.value.toString(),
        title: title.current.value.toString(),
      })
    );

    console.log(email.current.value, password.current.value);

    createUserWithEmailAndPassword(
      auth,
      email.current.value.toString(),
      password.current.value.toString()
    )
      .then((userCredential) => {
        const user = userCredential.user;

        console.log(userCredential.user);
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
          })
        );
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className={classes.login}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 56 14"
        data-supported-dps="56x14"
        fill="currentColor"
        class="mercado-match"
        width="56"
        height="14"
        focusable="false"
      >
        <g>
          <path
            class="background-mercado"
            d="M22.1 8.2l3.09 3.8h-2.44L20 8.51V12h-2V2h2v5.88L22.54 5h2.55zm-8-3.4A2.71 2.71 0 0011.89 6V5H10v7h2V8.73a1.74 1.74 0 011.66-1.93C14.82 6.8 15 7.94 15 8.73V12h2V8.29c0-2.2-.73-3.49-2.86-3.49zM32 8.66a4.22 4.22 0 010 .44h-5.25v.07a1.79 1.79 0 001.83 1.43 2.51 2.51 0 001.84-.69l1.33 1a4.31 4.31 0 01-3.25 1.29 3.49 3.49 0 01-3.7-3.75 3.58 3.58 0 013.76-3.65C30.44 4.8 32 6.13 32 8.66zm-1.86-.86a1.46 1.46 0 00-1.59-1.4 1.64 1.64 0 00-1.8 1.4zM2 2H0v10h6v-2H2zm36 0h2v10h-1.89v-.7a2.44 2.44 0 01-2 .9 3.41 3.41 0 01-3.31-3.7 3.36 3.36 0 013.3-3.7 2.62 2.62 0 011.9.7zm.15 6.5a1.63 1.63 0 00-1.62-1.85A1.76 1.76 0 0034.9 8.5a1.76 1.76 0 001.63 1.85 1.63 1.63 0 001.62-1.85zM8 1.8A1.27 1.27 0 006.75 3a1.25 1.25 0 002.5 0A1.27 1.27 0 008 1.8zM7 12h2V5H7zM56 1v12a1 1 0 01-1 1H43a1 1 0 01-1-1V1a1 1 0 011-1h12a1 1 0 011 1zM46 5h-2v7h2zm.25-2a1.25 1.25 0 00-2.5 0 1.25 1.25 0 002.5 0zM54 8.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 0048.89 6V5H47v7h2V8.73a1.74 1.74 0 011.66-1.93C51.82 6.8 52 7.94 52 8.73V12h2z"
          ></path>
        </g>
      </svg>
      <form className={classes.login_form}>
        <div className={classes.field}>
          <input type="text" id="username" ref={name} required></input>
          <label htmlFor="username">Full Name</label>
        </div>
        <div className={classes.field}>
          <input type="text" id="title" ref={title} required></input>
          <label htmlFor="title">Job title</label>
        </div>
        <div className={classes.field}>
          <input type="text" id="email" ref={email} required></input>
          <label htmlFor="email">Email</label>
        </div>

        <div className={classes.field}>
          <input type="password" id="passwd" ref={password} required></input>
          <label htmlFor="passwd">Password</label>
        </div>
        <div className={classes.field}>
          <input type="text" id="photo" ref={photoUrl} required></input>
          <label htmlFor="photo">Photo url(optional)</label>
        </div>
        <button
          className={classes.loginbtn}
          type="submit"
          onClick={loginHandler}
        >
          Sign In
        </button>
      </form>
      <div className={classes.register}>
        <span>Not a member?</span>
        <span className={classes.register_button} onClick={registerHandler}>
          Register now
        </span>
        <span className={classes.demoLogin} onClick={demoLogin}>
          Demo login
        </span>
      </div>
    </div>
  );
};

export default Login;
