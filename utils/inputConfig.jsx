export const personalConfig = {
  name: { type: "text", label: "Name" },
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
  exam: { type: "text", label: "Exam" },
  institution: { type: "text", label: "Institute" },
  group: { type: "text", label: "Group" },
  year: { type: "text", label: "Year" },
  cgpa: { type: "text", label: "CGPA" },
  scale: { type: "text", label: "Scale" },
};

export const trainingConfig = {
  trainingTitle: { type: "text", label: "Training Title" },
  institute: { type: "text", label: "Institute" },
  startDate: { type: "date", label: "Start Date" },
  endDate: { type: "date", label: "End Date" },
  topic: { type: "text", label: "Topic" },
  location: { type: "text", label: "Location" },
};

export const employmentConfig = {
  companyName: { type: "text", label: "Company Name" },
  companyLocation: { type: "text", label: "Company Location" },
  designation: { type: "text", label: "Designation" },
  from: { type: "date", label: "From" },
  to: { type: "date", label: "To" },
  responsibilities: { type: "text", label: "Responsibilities" },
};
