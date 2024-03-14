import * as Yup from "yup";

export const loginInSchema = Yup.object().shape({
  studentId: Yup.string().trim().required("Student Id is required"),
  password: Yup.string().trim().required("Password is required"),
});

export const forgotStudentIdSchema = Yup.object().shape({
  email: Yup.string().trim().email("Invalid email").required("Email is required"),
});

export const forgotPasswordSchema = Yup.object().shape({
  idOrEmail: Yup.string().trim().required("Student Id or Email is required"),
});

export const changePasswordSchema = Yup.object().shape({
  password: Yup.string().trim().required("A New password is required"),
  confirmPassword: Yup.string()
    .trim()
    .required("You must confirm your new password!")
    .test("passwords-match", "Password must be the same as the new password", function (value) {
      const password = this.parent.password;
      return value === password;
    }),
});
