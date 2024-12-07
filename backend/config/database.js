const mysqlp = require('mysql2/promise');
const mysql = require('mysql2');
const fs = require('fs/promises');
const path = require('path');

const SQL_FILE_PATH = path.join(process.cwd(), 'config/db.sql');

async function setupDatabase() {
    const connection = await mysqlp.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
    });
    try {
        const sql = await fs.readFile(SQL_FILE_PATH, 'utf8');
        const queries = sql.split(';').map(q => q.trim()).filter(q => q);
        for (const query of queries) await connection.query(query);
        //const [rows] = await connection.query('SELECT * FROM jogo');
        //console.log(rows);
    } catch (error) {
        console.error(error);
    } finally {
        await connection.end();
    }
}

async function main() {
    await setupDatabase();
}

async function getDatabase() {
    const db = await mysqlp.createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'gamejam',
    });
    return db
}

main().catch(console.error);
module.exports = getDatabase;