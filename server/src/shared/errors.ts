export const ERRORS = {
  INTERNAL_SERVER_ERROR: {
    statusCode: 500,
    message: {
      error: "Internal Server Error",
      error_description: "Something went wrong",
    },
  },
  STUDENT_ALREADY_REGISTERED: {
    statusCode: 400,
    message: {
      error: "STUDENT_ALREADY_EXISTS",
      error_description: "Student already registered",
    },
  },
};
