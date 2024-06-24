const { AirQualityData } = require("../models");

class AirQualityController {
  static getAll = async (req, res) => {
    try {
      const data = await AirQualityData.findAll({
        order: [["id", "DESC"]],
      });

      if (data.length === 0) {
        return res.status(404).json({
          message: "Data masih kosong!",
        });
      } else {
        res.status(200).json({
          data: data,
          message: "Berhasil mengambil semua data air quality!",
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // static getByDate = async (req, res) => {
  //     try {
  //         const history = AirQualityData.findOne({
  //             where: {
  //                 time: new Date(new Date.now()-1)
  //             }
  //         })
  //     } catch (error) {
  //         console.log(error.message)
  //     }
  // }
}

module.exports = AirQualityController;
