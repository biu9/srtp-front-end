import { POST } from "../request";

export async function handleVerify(trace) {
    const response = await POST("/api/postData", { trace });
    return response;
}