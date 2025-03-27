import { useEffect } from "react";

function LoginWithTelegram() {
  useEffect(() => {
    if (document.getElementById("telegram-login-script")) return;

    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?7";
    script.setAttribute("data-telegram-login", "Dodo_market_bot");
    script.setAttribute("data-size", "large");
    script.setAttribute("data-userpic", "true");
    script.setAttribute("data-request-access", "write");
    script.setAttribute("data-lang", "ru");
    script.setAttribute("data-onauth", "onTelegramAuth(user)");
    script.id = "telegram-login-script";
    script.async = true;

    window.onTelegramAuth = function (user) {
      alert(`Привет, ${user.first_name} (@${user.username})`);
      console.log(user);
      localStorage.setItem("telegram_user", JSON.stringify(user));
      window.location.href = "/profile";
    };

    document.getElementById("tg-login")?.appendChild(script);
  }, []);

  return <div id="tg-login"></div>;
}

export default LoginWithTelegram;
