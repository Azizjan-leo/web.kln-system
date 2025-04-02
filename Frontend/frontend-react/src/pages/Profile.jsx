import React from "react";
import "../Styles/Profile.css";

function Profile() {
  const user = JSON.parse(localStorage.getItem("telegram_user") || "null");

  if (!user) {
    return <p style={{ textAlign: "center" }}>Пользователь не найден</p>;
  }

  return (
    <div className="profile-container">
      <h2>Добро пожаловать, {user.first_name}!</h2>
      <p>@{user.username}</p>
      <img src={user.photo_url} alt="avatar" />
    </div>
  );
}

export default Profile;
