const {Sequelize, sequelize} = require('../db');
const {Model, DataTypes} = Sequelize;

// TODO - define the Band model
class Band extends Model{}

Band.init({
    name: DataTypes.STRING,
    genre: DataTypes.STRING
}, {
    sequelize,
    modelName: 'Band'
})

module.exports = {
    Band
};