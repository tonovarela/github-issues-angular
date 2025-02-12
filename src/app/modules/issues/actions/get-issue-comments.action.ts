
import { sleep } from "@helpers/sleep";

import { environment } from "@environments/environment.development";
import { GitHubIssue } from "../interfaces/github-issues.interface";
import { getHeaders } from "@helpers/header";


const API_URL = environment.baseURL;
const headers= getHeaders();
export const getIssueComments = async (id:string): Promise<GitHubIssue[]> => {
    try {
        await sleep(2000);
        const resp = await fetch(`${API_URL}/issues/${id}/comments`, headers);
        if (!resp.ok) {
            throw "Cant load issues";
        }
        const issues: GitHubIssue[] = await resp.json() as GitHubIssue[];        
        return issues;
    } catch (error) {
        throw "Cant load issues";
    }


}
