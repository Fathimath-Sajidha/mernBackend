const User = require('../models/user');
const bcrypt = require('bcrypt');

async function createUser(userData) {
    const { name, email, password } = userData;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the user
    const newUser = new User({ name, email, password: hashedPassword });
    return await newUser.save();
}

module.exports = { createUser };
