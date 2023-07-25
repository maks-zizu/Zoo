const router = require("express").Router();
const RegForm = require("../../components/RegForm");
const LoginForm = require("../../components/LoginForm");

router.get("/reg", (req, res) => {
  res.renderComponent(RegForm, { title: "Registration" });
});

router.get("/log", (req, res) => {
  res.renderComponent(LoginForm, { title: "Login" });
});

router.get("/logout", (req, res) => {
    req.session.destroy((error) => {
      if (error) {
        res.status(500).json({ message: "Ошибка при удалении сессии" });
      } else {
        res.clearCookie("user_sid").json({ message: "Успешный выход" });
      }
    });
  });

  
module.exports = router;
