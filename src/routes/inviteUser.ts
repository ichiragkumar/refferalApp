import express, {Router} from "express";
import { acceptInvite } from "../controllers/acceptInvite";
import { confirmInvite } from "../controllers/confirmInvite";
import { rejectInvite } from "../controllers/rejectInvite";
import { inviteUser } from "../controllers/inviteUser";





const router: Router = express.Router();


router.post("/invite", inviteUser);
router.post("/invite/accept", acceptInvite);
router.post("/invite/confirm", confirmInvite);
router.post("/invite/reject", rejectInvite);

export default router;