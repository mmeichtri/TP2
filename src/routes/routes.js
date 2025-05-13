import express from "express"
import userControllers from "../controllers/controllers.js"

const router = express.Router()

router.get("/", userControllers.getUsers)
router.post("/", userControllers.postUser)
router.patch("/update/:id", userControllers.patchUser)

export default router