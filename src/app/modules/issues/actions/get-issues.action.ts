
import { sleep } from "@helpers/sleep";

import { environment } from "@environments/environment.development";
import { GitHubIssue } from "../interfaces/github-issues.interface";


const API_URL = environment.baseURL;
const GITHUB_TOKEN = environment.token;
export const getIssues = async (): Promise<GitHubIssue[]> => {
    try {
        await sleep(2000);
        const resp = await fetch(`${API_URL}/issues`, {
            headers:
                { Authorization: `Bearer ${GITHUB_TOKEN}` }
        });
        if (!resp.ok) {
            throw "Cant load issues";
        }
        const issues: GitHubIssue[] = await resp.json() as GitHubIssue[];        
        return issues;
    } catch (error) {
        throw "Cant load issues";
    }


}
