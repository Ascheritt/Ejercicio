const { Pool } = require('pg');

const pool = new Pool({
    user : 'postgres',
    host : 'localhost',
    port : 5432,
    database : 'tarea',
    password : 'crecic30'
});

const conectar = async () => {
    const client = await pool.connect();
    return client;
}

exports.conectar = conectar;