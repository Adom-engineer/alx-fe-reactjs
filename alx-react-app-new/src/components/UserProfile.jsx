import React from 'react';

function UserProfile(props) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px' }}>
      <h2 style={{ color: 'blue', fontSize: '22px', marginBottom: '8px' }}>{props.name}</h2>
      <p style={{ fontSize: '16px' }}>
        Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
      </p>
      <p style={{ fontStyle: 'italic', color: 'darkslategray' }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;

