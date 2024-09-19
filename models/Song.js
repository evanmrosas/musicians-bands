const {Sequelize, sequelize} = require('../db');
const {Model, DataTypes} = Sequelize;

// TODO - define the Song model
class Song extends Model{}

Song.init({
    title: DataTypes.STRING,
    year: DataTypes.NUMBER,
    length: DataTypes.NUMBER
}, {
    sequelize,
    modelName: 'Song'
})

module.exports = {
    Song
};