import express from 'express';
import {
    deleteContactById,
    getAllContact,
    getContactById,
    getContactByUserId,
    newContact,
    updateContactById
} from '../Controllers/contact.js';
import { isAuthenticated } from '../Middlewares/Auth.js';
const router = express.Router();

//new contact
//@api dsc :- creating contact
//@api method: post
//@api endPoint :- /api/contact/new
router.post('/new', isAuthenticated,newContact)

//get allcontact
router.get('/', getAllContact)

//get contactById
router.get('/:id', getContactById)

//update contact by id
router.put('/:id',isAuthenticated,updateContactById)

//detlet contact by id
router.delete("/:id", isAuthenticated,deleteContactById);

//get user specfic contact
router.get("/userId/:id", getContactByUserId);

export default router;

