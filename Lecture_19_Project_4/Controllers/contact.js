import { json } from "express";
import { Contact } from "../Models/Contact.js";

//get all contact
export const getAllContact = async (req, res) => {
    const userContact = await Contact.find();

    if (!userContact) return res, json({ message: "No Contact Exist",
        success: false
    })

    res.json({ messsage: "All Contact Fatched", userContact })
}

//create new contact
export const newContact = async (req, res) => {
    const { name, email, phone, type } = req.body;

    if (name=="" || email== "" || phone=="" || type=="")
        return res.json({ message: "All fields are required", success: false })

    let saveContact = await Contact.create({
        name,
        email,
        phone,
        type,
        user:req.user
    });

    res.status(201).json({ message: "Contact saved successfully...!", saveContact, success: true })
};


//update contact by id
export const updateContactById = async (req, res) => {
    const id = req.params.id;
    const { name, email, phone, type } = req.body;

    let updateContact = await Contact.findByIdAndUpdate(
        id,
        {
            name,
            email,
            phone,
            type
        },
        { new: true }
    );

    if(!updateContact) return res.json({message:"No contact Exist",
        success:false})

        res.json({message:"Contact updted successfully....!", updateContact,success:true})
};


//delete contact by id 
export const deleteContactById  = async (req,res)=>{
    const id = req.params.id;

    let deleteContact = await Contact.findByIdAndDelete(id);

    if(!deleteContact)
        return res.json({message:"No contact exist", success:false});

    res.json({
        message:"Contact deleted Successfully....!",
        success:true,
    });
};
//get contact by id
export const getContactById = async (req, res) => {
    const id = req.params.id

    const userContact = await Contact.findById(id);
    if (!userContact) return res.json({
        message: 'No Contact find',
        success: 'false'
    })

    res.json({ message: "Contact Fetched", userContact, success: true })
}

//get contact by userid
export const getContactByUserId = async(req,res) =>{
 const id = req.params.id;
 
 const userContact = await Contact.find({user:id});
 if(!userContact)
    return res.json({message:"No Contact find", success:"false"});

 res.json({message:"User Specific Contact Fetched", userContact, success:true});
};