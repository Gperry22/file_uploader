module.exports = function (sequelize, DataTypes) {
    var Picture = sequelize.define("Picture", {
        pictureLink: {
            type: DataTypes.STRING
        }
    }, {
            freezeTableName: true
        });
return Picture
 }