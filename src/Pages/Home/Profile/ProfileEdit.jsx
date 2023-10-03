import React from 'react'
import { useSelector } from 'react-redux';

const ProfileEdit = () => {
  const {} = useSelector((state) => state.auth);
  return <div>ProfileEdit</div>;
}

export default ProfileEdit
