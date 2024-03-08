const { UnitStyle } = require('../models');

const getAllUnitStyle = async (req,res) => {
    try {
        const unitStyles = await UnitStyle.find()
        res.json(unitStyles)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getUnitStyleById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const unitStyles = await UnitStyle.findById(id);
        if (unitStyles) {
            return res.json(unitStyles);
        }
        return res.status(404).send('Unit style not found!');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createUnitStyle = async (req, res) => {
    try {
        const unitStyles = await new UnitStyle(req.body);
        await unitStyles.save();
        return res.status(201).json({unitStyles,});

    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
}

const updateUnitStyle = async (req, res) => {
    try {
        let { id } = req.params;
        let unitStyles = await UnitStyle.findByIdAndUpdate(id, req.body, { new: true })
        if (unitStyles) {
            return res.status(200).json(unitStyles)
        }
        throw new Error("Unit style not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteUnitStyle = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await UnitStyle.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Unit style deleted");
        }
        throw new Error("Unit style not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllUnitStyle,
    getUnitStyleById,
    createUnitStyle,
    updateUnitStyle,
    deleteUnitStyle
}