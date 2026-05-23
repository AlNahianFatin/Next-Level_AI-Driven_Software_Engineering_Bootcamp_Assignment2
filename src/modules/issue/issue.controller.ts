import { type Request, type Response } from "express";
import { issueService } from "./issue.service";
import sendResponse from "../../utility/sendResponse";


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
    getAllIssues,
}