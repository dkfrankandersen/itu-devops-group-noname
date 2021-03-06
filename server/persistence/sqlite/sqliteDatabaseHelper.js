
/**
 * Handling and accessing the Sqlite database.
 */

const db = require('./sqliteDatabase');

function getAll(query, params) {
	return new Promise((resolve, reject) => {
		db.all(query, params, (err, rows) => {
			if (err) {
				console.error(`sqliteDatabasehelper: ${err.message}`);
				reject(err);
			}
			resolve(rows);
		});
	});
}

function insert(query, params) {
	return new Promise((resolve, reject) => {
		db.run(query, params, (err, rows) => {
			if (err) {
				console.error(err.message);
				reject(err);
			}
			resolve(rows);
		});
	});
}

function getSingle(query, params) {
	return new Promise((resolve, reject) => {
		db.get(query, params, (err, row) => {
			if (err) {
				console.error(err.message);
				reject(err);
			}
			resolve(row);
		});
	});
}

module.exports = {
	getAll,
	getSingle,
	insert,
};
