import React, { useState, useEffect } from 'react';

const API = {
  getUsers: Promise.resolve({ json: () => ({ thing: 'thing', other: 'other thing' }) }),
};

function UsersWithHooks() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(async () => {
    try {
      const response = await API.getUsers();
      const json = await response.json();
      setData(json);
    } catch (e) {
      setError(e.message || 'Unexpected error');
    }
    setLoading(false);
  }, []);

  if (loading) { return <div>Loading</div>; }
  if (error) { return <div style={{ color: 'red' }}>ERROR: {error}</div>; }

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Active?</th>
          <th>Posts</th>
          <th>Messages</th>
        </tr>
      </thead>
      <tbody>{JSON.stringify(data)}</tbody>
    </table>
  );
}
export default UsersWithHooks;
