const fs = require('fs');

const saveToDatabase = (db) => {
    fs.writeFileSync("database/db.json", JSON.stringify(db, null, 2), {
        encoding: "utf-8"
    });
}

module.exports = {
    saveToDatabase
};