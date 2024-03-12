const { ContactMsg } = require('../models');

const getAllContactMsg = async (req,res) => {
    try {
        const contactMsgs = await ContactMsg.find()
        res.json(contactMsgs)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getContactMsgById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const contactMsgs = await ContactMsg.findById(id);
        if (contactMsgs) {
            return res.json(contactMsgs);
        }
        return res.status(404).send('ContactMsgs are not found!');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createContactMsg = async (req, res) => {
    try {
        const contactMsgs = await new ContactMsg(req.body);
        await contactMsgs.save();
        return res.status(201).json({contactMsgs,});

    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
}

const updateContactMsg = async (req, res) => {
    try {
        let { id } = req.params;
        let contactMsgs = await ContactMsg.findByIdAndUpdate(id, req.body, { new: true })
        if (contactMsgs) {
            return res.status(200).json(contactMsgs)
        }
        throw new Error("ContactMsg not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteContactMsg = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await ContactMsg.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("ContactMsg deleted");
        }
        throw new Error("ContactMsg not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllContactMsg,
    getContactMsgById,
    createContactMsg,
    updateContactMsg,
    deleteContactMsg
}