import React from "react";
import "./UsersList.css";

const UsersList = props => {
  const users = props.users.map(user => (
    <div key={user.login.uuid}>
      <img src={user.picture.large} alt={user.name.last} />
      <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
      <p>{user.email}</p>
    </div>
  ));
  return <div className="users">{users}</div>;
};

export default UsersList;
