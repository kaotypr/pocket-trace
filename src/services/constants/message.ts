import { APP_NAME } from "./extra";

export const ERROR_MESSAGE = {
  default: "Oops, something went wrong!",
  signup_failed: "Oops, we have problem while signing you up",
  signin_failed: "Oops, we have problem while signing you in",
  unathorized_location:
    `You need to allow location access in order to use this app.\n` +
    `Go to Setttings > ${APP_NAME} > Location > Allow location access`
};

export const SUCCESS_MESSAGE = {
  default: "Action done successfuly",
  trace_created: "Successfully created new trace"
};
