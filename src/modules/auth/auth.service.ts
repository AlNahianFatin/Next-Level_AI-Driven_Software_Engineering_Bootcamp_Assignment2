import bcrypt from "bcryptjs";
import { pool } from "../../db";
import jwt, { type JwtPayload } from "jsonwebtoken";
import config from "../../config";
import type { IUser } from "./auth.interface";

const signupUser = async (user: IUser) => {
    let { name, email, password, role } = user;
    if (!role)
        role = 'contributor';
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(`
        INSERT INTO users (name, email, password, role)
        VALUES ($1, $2, $3, $4) RETURNING *;
        `, [name, email, hashedPassword, role]);
    delete result?.rows[0]?.password;

    return result?.rows[0];
}

export const authService = {
    signupUser,
}