// export const BASE_URL = "http://192.168.0.199:4000/api/v1";
export const BASE_URL = "http://192.168.0.196:4000/api/v1"

/* Auth URLs */
export const CHECK_SESSION_URL = `${BASE_URL}/auth/drivers/session`;
export const LOGIN_URL = `${BASE_URL}/auth/drivers/login`;

export const GET_ASSIGNED_SHIPMENT_URL = `${BASE_URL}/shipments/assigned`;
export const SHIPMENT_TRACKING_URL = `${BASE_URL}/shipments/tracking`;
export const CONFIRM_SHIPMENT_URL = `${BASE_URL}/shipments/completed`;
export const CANCEL_SHIPMENT_URL = `${BASE_URL}/shipments/canceled`;

export const USER_DATA_URL = `${BASE_URL}/drivers/data`;
