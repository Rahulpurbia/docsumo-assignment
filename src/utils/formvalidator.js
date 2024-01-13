export const isFieldValid = (fieldName, value) => {
  const emailRegex = /\b[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}\b/;
  let fieldValue = value.trim();
  const invalidDomain = [
    "email.",
    "gmail.",
    "yahoo.",
    "outlook.",
    "hotmail.",
    "aol.",
    "  icloud.",
    " mail.",
    "protonmail.",
    "  yandex.",
    "  zoho.",
    " gmx.",
  ];
  const containsDisallowedDomain =
    fieldName === "work_email" &&
    invalidDomain
      .map((domain) => {
        return fieldValue.includes(domain);
      })
      .findIndex((value) => value);

  console.log(containsDisallowedDomain);

  let emptyError = fieldValue === "" ? "Field cannot be blank" : "";

  switch (fieldName) {
    case "full_name":
      return emptyError;
    case "work_email":
      return emptyError
        ? emptyError
        : !emailRegex.test(fieldValue)
        ? "Enter a valid  email address"
        : containsDisallowedDomain >= 0
        ? `Please enter a different email address. This form does not accept addresses from ${invalidDomain[containsDisallowedDomain]} domain`
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
