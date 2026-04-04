import { API_BASE_URL } from './config';
// Toggle this depending on whether you are developing locally or deploying.
// Set to true before deploying to Railway/Firebase. Set to false for local XAMPP/IntelliJ testing.
const isProduction = false;

export const API_BASE_URL = isProduction 
    ? `${API_BASE_URL}`
    : 'http://localhost:8080';
