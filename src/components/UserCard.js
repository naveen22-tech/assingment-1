import React from "react";

import './index.css';

const UserCard = ({ user }) => {
  const avatar = `https://avatars.dicebear.com/v2/avataaars/${encodeURIComponent(
    user.username
  )}.svg?options[mood][]=happy`;

  const address = `${user.address.street}, ${user.address.suite}, ${user.address.city} ${user.address.zipcode}`;

  return (
    <div className="card ">
      <img
        src={avatar}
        alt={user.username}
        className="card-img-top"
        style={{ height: 200, objectFit: "cover", borderRadius: '25%' }}
      />
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="mb-1"><strong>Company:</strong> {user.company.name}</p>
        <p className="mb-1"><a href={`mailto:${user.email}`}>{user.email}</a></p>
        <p className="mb-1">{user.phone}</p>
        <p className="mb-1 add">{address}</p>
        <a href={`http://${user.website}`} target="_blank" rel="noreferrer">
          Visit website
        </a>
      </div>
    </div>
  );
};

export default UserCard;
