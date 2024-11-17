import React from 'react';

function UserProfile({ name, age, bio }) {
  return (
    <div style={{ border: '1px solid gray', borderRadius: '8px', padding: '15px', margin: '15px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: 'blue', marginBottom: '10px' }}>{name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold', color: 'green' }}>{age}</span></p>
      <p style={{ fontStyle: 'italic' }}>Bio: {bio}</p>
    </div>
  );
}

export default UserProfile;
