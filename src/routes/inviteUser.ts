import express, {Router} from "express";
import { acceptInvite } from "../controllers/acceptInvite";
import { confirmInvite } from "../controllers/confirmInvite";
import { rejectInvite } from "../controllers/rejectInvite";
import { inviteUser } from "../controllers/inviteUser";
import { publist1kInvites } from "../controllers/publish1KInvites";





const router: Router = express.Router();


router.post("/invite", inviteUser);
router.post("/invite/publish1k", publist1kInvites);
router.post("/invite/accept", acceptInvite);
router.post("/invite/confirm", confirmInvite);
router.post("/invite/reject", rejectInvite);

export default router;