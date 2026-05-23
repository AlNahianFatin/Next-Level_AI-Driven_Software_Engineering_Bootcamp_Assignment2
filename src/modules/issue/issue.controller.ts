import { type Request, type Response } from "express";
import { issueService } from "./issue.service";
import sendResponse from "../../utility/sendResponse";

const createIssue = async (req: Request, res: Response) => {
    try {
        const result = await issueService.createIssueIntoDB(req.body, req.user?.id);

        sendResponse(res, {
            statusCode: 201,
            success: true,
            message: "Issue created successfully",
            data: result.rows[0]
        });
    } catch (error: any) {
        sendResponse(res, {
            statusCode: 500,
            success: false,
            message: error.message,
            error: error,
        });
    }
}

const getAllIssues = async (req: Request, res: Response) => {
    try {
        const result = await issueService.getAllIssuesFromDB();

        sendResponse(res, {
            statusCode: 200,
            success: true,
            data: result
        });
    } catch (error: any) {
        sendResponse(res, {
            statusCode: 500,
            success: false,
            message: error.message,
            error: error,
        });
    }
}




export const issueController = {
    createIssue,
    getAllIssues
}