import React from 'react';

export default function UserProfile({ name, email }) {
  return (
    <div className="user-profile"> {/* UserProfile component to display user information */}
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}