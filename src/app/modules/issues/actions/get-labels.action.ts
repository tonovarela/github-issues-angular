
import { sleep } from "@helpers/sleep";
import { GitHubLabel } from "../interfaces/github-label.interface";
import { environment } from "@environments/environment.development";
import { getHeaders } from "@helpers/header";

const API_URL = environment.baseURL;
const headers= getHeaders();
export const getLabels = async (): Promise<GitHubLabel[]> => {
    try {
        await sleep(2000);
        const resp = await fetch(`${API_URL}/labels`, headers);
        if (!resp.ok) {
            throw "Cant load labels";
        }
        const labels: GitHubLabel[] = await resp.json() as GitHubLabel[];        
        return labels;
    } catch (error) {
        throw "Cant load labels";
    }


}
