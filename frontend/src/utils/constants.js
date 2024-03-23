import UserData from "../views/plugin/UserData";

export const API_BASE_URL = "http://127.0.0.1:8000/api/v1/";
export const SERVER_URL = "http://127.0.0.1:8000";
export const CLIENT_URL = "http://localhost:5173";
export const PAYPAL_CLIENT_ID = "test";
export const CURRENCY_SIGN = "$";
export const userId = UserData()?.user_id;
export const teacherId = UserData()?.teacher_id;
console.log(teacherId);
