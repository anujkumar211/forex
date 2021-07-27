import { extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";

// Add the required rule
extend("required", {
 ...required,
 message: "This field is required",
});

// Add the email rule
extend("email", {
 ...email,
 message: "This field must be a valid email",
});
