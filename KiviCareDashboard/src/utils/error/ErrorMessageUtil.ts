import ErrorCode from "./ErrorCode"


const errorCodeMessages = new Map<number, string>()
errorCodeMessages.set(ErrorCode.INTERNAL_SERVER_ERROR, "ERROR_INTERNAL_SERVER_ERROR")

errorCodeMessages.set(ErrorCode.SYSTEM_NOT_FOUND, "ERROR_SYSTEM_NOT_FOUND")
errorCodeMessages.set(ErrorCode.SYSTEM_CONTAINS_CERTIFICATE_LEVEL, "ERROR_SYSTEM_CONTAINS_USED_QUESTION")

errorCodeMessages.set(ErrorCode.DIFFICULTY_NOT_FOUND, "ERROR_DIFFICULTY_NOT_FOUND")
errorCodeMessages.set(ErrorCode.DIFFICULTY_CONTAINS_USED_QUESTION, "ERROR_DIFFICULTY_CONTAINS_USED_QUESTION")

errorCodeMessages.set(ErrorCode.EMAIL_USER_EXISTED, "ERROR_EMAIL_USER_EXISTED")
errorCodeMessages.set(ErrorCode.ERROR_ACCOUNT_NOT_EXISTED, "ERROR_ACCOUNT_NOT_EXISTED")

// errorCodeMessages.set(ErrorCode.NAME_ROLE_EXISTED, "ERROR_NAME_ROLE_EXISTED")
export default {
  getMessage: function (errorCode: number | unknown): string {
    const message = errorCodeMessages.get(errorCode as number)
    return message ? message : `Error: ${errorCode}`
  }
}
