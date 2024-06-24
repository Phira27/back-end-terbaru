'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AirQualityData extends Model {
    static associate(models) {
      // define association here
    }
  }
  AirQualityData.init({
    temperature: DataTypes.FLOAT,
    humidity: DataTypes.FLOAT,
    NO2_concentration: DataTypes.FLOAT,
    PM10_concentration: DataTypes.FLOAT,
    PM25_concentration: DataTypes.FLOAT,
    ispu_no2: DataTypes.FLOAT,
    ispu_pm10: DataTypes.FLOAT,
    ispu_pm25: DataTypes.FLOAT,
    ispu_average: DataTypes.FLOAT,
    ispu_category: DataTypes.STRING,
    time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'AirQualityData',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  });
  return AirQualityData;
};
