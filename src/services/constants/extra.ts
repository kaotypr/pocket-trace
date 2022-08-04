import Constants from "expo-constants";

const EXTRA = Constants.manifest?.extra || {};

export const { APP_NAME = "$APP_NAME", APP_ENV, APP_API_BASE_URL } = EXTRA;

export default EXTRA;
