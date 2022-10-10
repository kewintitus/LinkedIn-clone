import React, { useEffect, useState } from 'react';
import feed from './Feed.module.css';
import FeedInput from './FeedInput';
import classes from './Feed.module.css';
import Post from './Post';
import { db } from '../../../firebase/firebase';
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
} from 'firebase/firestore';

const Feed = (props) => {
  const [posts, setPosts] = useState([]);
  // const querySnapshot = await getDocs(collection(db, "cities"));

  const getPostData = async () => {
    const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const posts = [];
      querySnapshot.forEach((doc) => {
        posts.push(doc.data());
      });
      setPosts(posts);
      console.log(posts);
    });
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div className={classes.feed}>
      <FeedInput />
      <Post data={posts} />
    </div>
  );
};

export default Feed;
