import React from 'react';
import { useSelector } from 'react-redux';
import { GetName } from '../cart/cartSlice';

function UserName() {
  const username = useSelector(GetName);

  if (!username) return;
  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default UserName;
