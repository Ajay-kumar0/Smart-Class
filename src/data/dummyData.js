// ---------------------------------------------------------------------------
// Demo/UI-only data. Nothing here is real — swap this out for your API or
// database calls. It exists purely so the frontend has something to render.
// ---------------------------------------------------------------------------

export const subjectPalette = ["violet", "aqua", "coral", "amber"];

export const allSubjects = [
  { id: "cs501", code: "CS501", name: "Data Structures", color: "violet" },
  { id: "cs502", code: "CS502", name: "Operating Systems", color: "aqua" },
  { id: "cs503", code: "CS503", name: "Database Systems", color: "coral" },
  { id: "cs504", code: "CS504", name: "Computer Networks", color: "amber" },
  { id: "cs505", code: "CS505", name: "Machine Learning", color: "violet" },
  { id: "cs506", code: "CS506", name: "Web Technologies", color: "aqua" },
];

// Generates a pseudo-random run of session statuses for punch-grid previews.
// present | absent | late | none (no class held)
export function generateSessions(count = 28, seed = 1) {
  const statuses = ["present", "present", "present", "absent", "present", "late"];
  const sessions = [];
  let s = seed;
  for (let i = 0; i < count; i++) {
    s = (s * 9301 + 49297) % 233280;
    const rand = s / 233280;
    let status = statuses[Math.floor(rand * statuses.length)];
    if (rand > 0.94) status = "none";
    sessions.push({ day: i + 1, status });
  }
  return sessions;
}

export function attendancePercent(sessions) {
  const held = sessions.filter((s) => s.status !== "none");
  const present = held.filter((s) => s.status === "present" || s.status === "late");
  if (held.length === 0) return 0;
  return Math.round((present.length / held.length) * 100);
}

export const teacherSubjects = allSubjects.slice(0, 4).map((subj, i) => ({
  ...subj,
  studentsEnrolled: 38 + i * 6,
  sessions: generateSessions(30, i + 3),
}));

export const studentSubjects = allSubjects.slice(1, 5).map((subj, i) => ({
  ...subj,
  teacher: ["Dr. R. Sharma", "Prof. A. Iyer", "Dr. N. Verma", "Prof. K. Das"][i],
  sessions: generateSessions(30, i + 7),
}));

export const rosterNames = [
  "Aarav Mehta", "Priya Singh", "Rohan Gupta", "Sneha Kapoor", "Vikram Rao",
  "Ananya Joshi", "Karan Malhotra", "Ishita Sharma", "Aditya Verma", "Neha Reddy",
  "Yash Patel", "Diya Nair", "Kabir Khanna", "Meera Iyer", "Arjun Bose",
];

export const classRoster = rosterNames.map((name, i) => ({
  id: `stu-${i + 1}`,
  rollNo: `MCA25${(i + 1).toString().padStart(3, "0")}`,
  name,
  status: ["present", "present", "present", "absent", "late"][i % 5],
}));
