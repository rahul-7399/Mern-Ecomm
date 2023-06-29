import express from "express";
import {
  addProject,
  addTimeline,
  contact,
  deleteProject,
  deleteTimeline,
  getUser,
  login,
  logout,
  myProfile,
  updateUser,
} from "../controller/User.js";
import { isAuthenticated } from "../middleware/auth.js";
const router = express.Router();

router.post("/login", login);
router.get("/logout", logout);
router.get("/user", getUser);
router.get("/me", isAuthenticated, myProfile);
router.put("/admin/update", isAuthenticated, updateUser);
router.post("/admin/timeline/add", isAuthenticated, addTimeline);
router.post("/admin/project/add", isAuthenticated, addProject);

router.delete("/admin/timeline/:id", isAuthenticated, deleteTimeline);
router.delete("/admin/project/:id", isAuthenticated, deleteProject);

router.post("/contact", contact);

export default router;
