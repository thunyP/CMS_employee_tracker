import dotenv from 'dotenv';
dotenv.config();
import pg from 'pg';

const { Pool } = pg;
const pool = new Pool({
    user: process.env.DB_USER,
    password:process.env.DB_password,
    host:'localhost',
    database: process.env.DB_NAME,
    por: 5432,
});

const connectToDb = async () => {
    try { 
        await pool.connect();
        console.log('connnected to the database.')
    } catch (error) {
        console.error('error connectiing to database:', error);
        process.exit(1);
        }
    };

export { pool, connectToDb };