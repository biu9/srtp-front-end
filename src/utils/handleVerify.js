import { POST } from "../request";

export async function handleVerify(trace) {
    const response = await POST("/verify", { trace });
    return response;
}