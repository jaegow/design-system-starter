import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserIP } from '../store/actions/userActions';
import { buildLoggers } from '../modules/Log';

const { log } = buildLoggers('User_Redux_Hooks Wrapper');

/**
 * Placeholder wrapper for testing redux and hooks
 * for better separation of concerns you should use wrappers that have all of the hooks code in it
 * or
 * for better sepaaration of concerns you should use connect and a wrapper component
 *
 * @version 0.0.1
 * @author [Justin Gow](https://github.com/jaegow)
 */
function User_Redux_Hooks() {
  const ip = useSelector((state) => state.User.ip);
  const dispatch = useDispatch();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    dispatch(getUserIP());
  });

  return (
    <div>
      <h1>{`User IP: ${ip}`}</h1>
      <p>using redux hooks</p>
    </div>
  );
}

export default User_Redux_Hooks;
