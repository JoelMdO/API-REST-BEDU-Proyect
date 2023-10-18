const { connect, update } = require('./sequelize');
const User = require('./user');
const Airport = require('./airport');
const Comment = require('./comment');

User.hasMany(Comment, { as: 'comment', foreignKey: 'user_id' });
Airport.hasMany(Comment, { as: 'comment', foreignKey: 'airport_id' });
Comment.belongsTo(Airport, { as: 'airports', foreignKey: 'airport_id' });
Comment.belongsTo(User, { as: 'user', foreignKey: 'user_id' });

exports.initDatabase = async function () {

    await connect();
    await update();

};