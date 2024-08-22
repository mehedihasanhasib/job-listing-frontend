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

// {
//   degree: "Bachelor of Science",
//   exam: "BSC",
//   group: "CSE",
//   year: "2024",
//   cgpa: "3.94",
//   scale: "4.00",
// },

export const educationConfig = {
  degree: { type: "text", label: "Degree" },
  exam: { type: "text", label: "Exam" },
  group: { type: "text", label: "Group" },
  year: { type: "text", label: "Year" },
  cgpa: { type: "text", label: "CGPA" },
  scale: { type: "text", label: "Scale" },
  // degree: { type: "text", label: "Degree" },
  // institution: { type: "text", label: "Institution" },
  // graduationYear: { type: "date", label: "Graduation Year" },
  // grade: { type: "text", label: "Grade" },
};
