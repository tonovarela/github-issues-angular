
import { sleep } from "@helpers/sleep";

import { environment } from "@environments/environment.development";
import { GitHubIssue, State } from "../interfaces";
import { getHeaders } from "@helpers/header";




const API_URL = environment.baseURL;
const headers =  getHeaders();
export const getIssues = async (state:State= State.All,seletedLabels:string[]): Promise<GitHubIssue[]> => {
    const params = new URLSearchParams();
    params.append("state", state);
    if (seletedLabels.length>0) {
        params.append("labels", seletedLabels.join(","));
    }
    try {
        await sleep(2000);
        const resp = await fetch(`${API_URL}/issues?${params}`, headers);
        if (!resp.ok) {
            throw "Cant load issues";
        }
        const issues: GitHubIssue[] = await resp.json() as GitHubIssue[];        
        return issues;
    } catch (error) {
        throw "Cant load issues";
    }


}
