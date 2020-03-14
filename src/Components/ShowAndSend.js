import React from 'react';
import AllUsers from './AllUsers';

export default function ShowAndSend () {
  return (
    <div>
      <AllUsers header="All users ordered by name" />
      <AllUsers header="All users ordered by age" />
    </div>
  );
}
