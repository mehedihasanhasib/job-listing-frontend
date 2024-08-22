export const personalConfig = {
  firstName: { type: "text", label: "First Name" },
  lastName: { type: "text", label: "Last Name" },
  email: { type: "email", label: "Email" },
  fatherName: { type: "text", label: "Father Name" },
  motherName: { type: "text", label: "Mother Name" },
  dob: { type: "date", label: "Date of Birth" },
  gender: {
    type: "select",
    label: "Gender",
    options: ["Male", "Female", "Other"],
  },
  phone: { type: "text", label: "Phone" },
};

export const educationConfig = {
  degree: { type: "text", label: "Degree" },
  institution: { type: "text", label: "Institution" },
  graduationYear: { type: "date", label: "Graduation Year" },
  grade: { type: "text", label: "Grade" },
};
