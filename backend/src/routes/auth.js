import { Router } from "express";

const router = Router();

// Hardcoded default admin credentials (username: admin, password: soaring@123)
const ADMIN_USER = process.env.ADMIN_USER || "admin";
const ADMIN_PASS = process.env.ADMIN_PASS || "soaring@123";

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    res.json({ success: true, token: "soaring-admin-token-12345" });
  } else {
    res.status(401).json({ success: false, error: "Invalid username or password" });
  }
});

export default router;
