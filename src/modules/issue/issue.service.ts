import { pool } from "../../db";
import type { IIssue } from "./issue.interface";


const createIssueIntoDB = async (payload: IIssue, reporter_id: number) => {
    const { title, description, type } = payload;

    const report = await pool.query(`
        INSERT INTO issues (title, description, type, reporter_id)
        VALUES ($1, $2, $3, $4) RETURNING *;
        `, [title, description, type, reporter_id]);

    return report;
}

const getAllIssuesFromDB = async () => {
    const result = await pool.query(`
        SELECT
            issues.id,
            issues.title,
            issues.description,
            issues.type,
            issues.status,
            issues.created_at,
            issues.updated_at,
            users.id AS reporter_id,
            users.name AS reporter_name,
            users.role AS reporter_role
            FROM issues
            JOIN users
            ON issues.reporter_id = users.id
            ORDER BY created_at DESC;
        `);

    const formattedData = result.rows.map((issue) => ({
        id: issue.id,
        title: issue.title,
        description: issue.description,
        type: issue.type,
        status: issue.status,
        reporter: {
            id: issue.reporter_id,
            name: issue.reporter_name,
            role: issue.reporter_role
        },
        created_at: issue.created_at,
        updated_at: issue.updated_at
    }));

    return formattedData;
}

export const issueService = {
    createIssueIntoDB,
    getAllIssuesFromDB,

}