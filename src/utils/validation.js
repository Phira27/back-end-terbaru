const validate = require('validate.js');

exports.validatePasirian = (data) => {
    // user schema
    var constraint = {
        temperature: {
            presence: {
                allowEmpty: true,
            },
        },
        humidity: {
            presence: {
                allowEmpty: true,
            },
        },
        NO2_concentration: {
            presence: {
                allowEmpty: true,
            },
        },
        PM10_concentration: {
            presence: {
                allowEmpty: true,
            },
        },
        PM25_concentration: {
            presence: {
                allowEmpty: true,
            },
        },
        ispu_no2: {
            presence: {
                allowEmpty: true,
            },
        },
        ispu_pm10: {
            presence: {
                allowEmpty: true,
            },
        },
        ispu_pm25: {
            presence: {
                allowEmpty: true,
            },
        },
        ispu_average: {
            presence: {
                allowEmpty: true,
            },
        },
        category_no2: {
            presence: {
                allowEmpty: true,
            },
        },
        category_pm10: {
            presence: {
                allowEmpty: true,
            },
        },
        category_pm25: {
            presence: {
                allowEmpty: true,
            },
        },
        category_average: {
            presence: {
                allowEmpty: true,
            },
        },
        time: {
            presence: {
                allowEmpty: true,
            },
        },
    };

    return validate(data, constraint, { format: 'flat' });
};


exports.validateLumajang = (data) => {
    // user schema
    var constraint = {
        temperature: {
            presence: {
                allowEmpty: true,
            },
        },
        humidity: {
            presence: {
                allowEmpty: true,
            },
        },
        NO2_concentration: {
            presence: {
                allowEmpty: true,
            },
        },
        PM10_concentration: {
            presence: {
                allowEmpty: true,
            },
        },
        PM25_concentration: {
            presence: {
                allowEmpty: true,
            },
        },
        ispu_no2: {
            presence: {
                allowEmpty: true,
            },
        },
        ispu_pm10: {
            presence: {
                allowEmpty: true,
            },
        },
        ispu_pm25: {
            presence: {
                allowEmpty: true,
            },
        },
        ispu_average: {
            presence: {
                allowEmpty: true,
            },
        },
        category_no2: {
            presence: {
                allowEmpty: true,
            },
        },
        category_pm10: {
            presence: {
                allowEmpty: true,
            },
        },
        category_pm25: {
            presence: {
                allowEmpty: true,
            },
        },
        category_average: {
            presence: {
                allowEmpty: true,
            },
        },
        time: {
            presence: {
                allowEmpty: true,
            },
        },
    };

    return validate(data, constraint, { format: 'flat' });
};


exports.validateSenduro = (data) => {
    // user schema
    var constraint = {
        temperature: {
            presence: {
                allowEmpty: true,
            },
        },
        humidity: {
            presence: {
                allowEmpty: true,
            },
        },
        NO2_concentration: {
            presence: {
                allowEmpty: true,
            },
        },
        PM10_concentration: {
            presence: {
                allowEmpty: true,
            },
        },
        PM25_concentration: {
            presence: {
                allowEmpty: true,
            },
        },
        ispu_no2: {
            presence: {
                allowEmpty: true,
            },
        },
        ispu_pm10: {
            presence: {
                allowEmpty: true,
            },
        },
        ispu_pm25: {
            presence: {
                allowEmpty: true,
            },
        },
        ispu_average: {
            presence: {
                allowEmpty: true,
            },
        },
        category_no2: {
            presence: {
                allowEmpty: true,
            },
        },
        category_pm10: {
            presence: {
                allowEmpty: true,
            },
        },
        category_pm25: {
            presence: {
                allowEmpty: true,
            },
        },
        category_average: {
            presence: {
                allowEmpty: true,
            },
        },
        time: {
            presence: {
                allowEmpty: true,
            },
        },
    };

    return validate(data, constraint, { format: 'flat' });
};