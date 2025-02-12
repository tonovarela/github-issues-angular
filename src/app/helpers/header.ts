import { environment } from "@environments/environment.development"

const APITOKEN = environment.token;

export const getHeaders=()=>{

    if (APITOKEN.length === 0) {
        return {}
    }
    return {
        headers:
             { Authorization: `Bearer ${APITOKEN}` }
    }
    
}