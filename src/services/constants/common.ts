export const WATCH_POSITION_TIME_INTERVAL = 10000; // 10 seconds
export const WATCH_POSITION_DISTANCE_INTERVAL = 10; // 10 meter
export const DEFAULT_LAT_LONG_DELTA = 0.008;
export const LAT_LONG_DELTA_ZOOM_RANGE = 0.001;
export const MINIMUM_LAT_LONG_DELTA = 0.001;
export const MAXIMUM_LAT_LONG_DELTA = 0.1;
export const DEFAULT_CURRENT_LOCATION_RADIUS = 15;

export const HTTP_STATUS = {
  INFO: [100, 101, 102],
  SUCCESS: [200, 201, 202, 203, 204, 205, 206, 207, 266],
  REDIRECT: [300, 301, 302, 303, 304, 305, 306, 307, 308],
  CLIENT_ERROR: [400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 499],
  SERVER_ERROR: [500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 599]
};
