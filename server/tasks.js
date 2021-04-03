const db = require('../db/config.js')

const getTasks = (callback) => {
    db.query('select * from tasks;', function (err, result) {
        if (err) {
            callback(err, null);
        } else {
            callback(result, null);
        }
    }
    )
};

// getTasks((err, result) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(result);
//     }
// })
module.exports = {
    getTasks
};


