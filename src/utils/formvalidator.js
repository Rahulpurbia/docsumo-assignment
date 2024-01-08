export const isFieldValid = (fieldName, value) => {
  let emailRegex = /\b[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}\b/;
  let fieldValue = value.trim();
  let emptyError = fieldValue === "" ? "Field cannot be blank" : "";

  switch (fieldName) {
    case "full_name":
      return emptyError;
    case "work_email":
      return emptyError
        ? emptyError
        : !emailRegex.test(fieldValue)
        ? "Enter a valid company email address"
        : "";
    case "phone_number":
      return emptyError
        ? emptyError
        : fieldValue <= 0
        ? "Phone number cannot be zero or negative"
        : "";
    case "company_name":
      return emptyError;
    case "job_title":
      return emptyError;
    case "no_of_docs":
      return emptyError
        ? emptyError
        : fieldValue <= 0
        ? "Number of documents cannot be zero or negative"
        : "";
    default:
      return false;
  }
};
