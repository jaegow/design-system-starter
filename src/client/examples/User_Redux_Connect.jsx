import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserIP } from '../store/actions/userActions';
import { buildLoggers } from '../modules/Log';

const { log } = buildLoggers('User_Redux_Hooks Wrapper');

/**
 * Placeholder wrapper for testing
 *
 * @version 0.0.1
 * @author [Justin Gow](https://github.com/jaegow)
 */
function User_Redux_Connect({ ip }) {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    getUserIP();
  });

  return (
    <div>
      <h1>{`User IP: ${ip}`}</h1>
      <p>using redux connect</p>
    </div>
  );
}

const mapStateToProps = ({ User: { ip } }) => ({ ip });
const mapDispatchToProps = { getUserIP };

export default connect(mapStateToProps, mapDispatchToProps)(User_Redux_Connect);
