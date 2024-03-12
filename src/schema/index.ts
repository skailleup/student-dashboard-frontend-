import * as Yup from "yup";

export const loginInSchema = Yup.object().shape({
  studentId: Yup.string().trim().required("Student Id is required"),
  password: Yup.string().trim().required("Password is required"),
});
