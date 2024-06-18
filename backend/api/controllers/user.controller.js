const db = require('../models');
const User = db.user;
const bcrypt = require('bcrypt');

// CREA USUARIO (POST)

const createUser = async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const user = await User.create(req.body);
        return res.status(201).json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).send('>> Oops something went wrong, could not create user.');
    }
};

// OBTENER TODOS LOS USUARIOS (GET)

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.status(500).send('>> Oops something went wrong, could not fetch users.');
    }
};

// OBTIENE USUARIO POR ID 

const getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            return res.status(200).json(user);
        } else {
            return res.status(404).send('>> User not found.');
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send('>> Oops something went wrong, could not fetch user.');
    }
};

// ACTUALIZA USUARIO 

const updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.update(req.body);
            return res.status(200).json(user);
        } else {
            return res.status(404).send('>> User not found.');
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send('>> Oops something went wrong, could not update user.');
    }
};

// BORRA USUARIO 

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.destroy();
            return res.status(204).send();
        } else {
            return res.status(404).send('>> User not found.');
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send('>> Oops something went wrong, could not delete user.');
    }
};

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
};
