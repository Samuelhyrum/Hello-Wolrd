const { User } = require('../models');

const getUsersBooksBYId = (id) => User.findOne({
    where: { id },
});

module.exports = {
    getUsersBooksBYId,
};