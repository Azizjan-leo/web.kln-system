function Profile() {
    const user = JSON.parse(localStorage.getItem("telegram_user"));
    if (!user) return <p>Пользователь не найден</p>;
  
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Добро пожаловать, {user.first_name}!</h2>
        <p>@{user.username}</p>
        <img src={user.photo_url} alt="avatar" style={{ borderRadius: "50%" }} />
      </div>
    );
  }
  
  export default Profile;
  