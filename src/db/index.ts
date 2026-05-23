import { Pool } from "pg";
import config from "../config";

export const pool = new Pool({
    connectionString: config.connection_string
});

export const initDB = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            email VARCHAR(60) UNIQUE NOT NULL,
            password TEXT NOT NULL,
            role VARCHAR(15) CHECK (role IN ('contributor', 'maintainer')) DEFAULT 'contributor',
            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()
            )`);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS issues (
            id SERIAL PRIMARY KEY,
            title VARCHAR(150) NOT NULL,
            description VARCHAR(250) CHECK (char_length(description) >= 20) NOT NULL,
            type VARCHAR(20)  CHECK (type IN ('bug', 'feature_request')) NOT NULL,
            status VARCHAR(15) CHECK (status IN ('open', 'in_progress', 'resolved')) DEFAULT 'open',
            reporter_id INT NOT NULL,
            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()
            )`)

            console.log(`Connected to database NeonDB successfully!`);
    } catch (error) {
        console.log(error);
    }
};