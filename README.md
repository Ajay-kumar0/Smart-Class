# SmartClass — Attendance, Punched In

SmartClass is an academic attendance tracker with a distinct visual identity:
every session a student attends shows up as a colored tile in a "punch card"
grid, so a whole semester's attendance reads at a glance. It has two portals
— **Teacher** and **Student** — and two AI-assisted ways to take attendance:
**photo-based face detection** and **voice roll call**.

## Project status

**Phase 1 — Frontend & UI (complete)**
Both portals, all core screens, and the full punch-card design system are
built and working: landing page, teacher registration (with dynamic
subject list, minimum one required), teacher dashboard, mark-attendance
screen, student registration (with subject selection), student dashboard,
and per-subject attendance detail. `npm run build` completes cleanly.

**Phase 2 — AI-assisted attendance (in progress)**
Two AI attendance modes are wired in and functionally working today, on top
of the manual mode:
- **Photo capture** — real, on-device face *detection* (not yet per-student
  face *recognition*). It finds and counts faces in a classroom photo and
  auto-fills the roster in order up to that count.
- **Voice roll call** — real speech recognition via the browser. Calls each
  student, listens for a spoken "present," and marks them accordingly.

The next milestone is upgrading photo attendance from face *detection* to
per-student face *recognition* — enrolling a reference photo per student at
registration and matching against it — which is what will let the photo
mode mark the *correct* named student present instead of filling the roster
in order. That, plus a real backend (auth, persistence, an attendance API),
is what's left before this is a finished product. Target: within the week.

---

## Stack

- **React 18** + **Vite 5**
- **react-router-dom** for routing
- **lucide-react** for icons
- **face-api.js** (TensorFlow.js under the hood) for on-device face detection
- **Web Speech API** (native browser API, no package) for voice roll call
- Plain CSS with a shared design-token system (`src/index.css`)

All data (subjects, students, attendance history) currently comes from mock
data in `src/data/dummyData.js`; login/register don't yet hit a real backend.
That's the Phase 3 work described above.

---

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build      # production build → dist/
npm run preview    # preview the production build
```

Requires Node 18+.

### Camera & microphone permissions

The photo and voice attendance modes ask the browser for camera / microphone
access. Both:
- run entirely **on-device** — no image, audio, or video is uploaded anywhere
- need **HTTPS or localhost** (browsers block camera/mic access on plain HTTP)
- work best in **Chrome** (desktop or Android) — voice roll call depends on
  `SpeechRecognition`, which Safari/Firefox don't fully support

---

## Project structure

```
public/
  models/                        # tiny-face-detector weights (face-api.js)
  favicon.png

src/
  data/
    dummyData.js                 # mock subjects, roster, attendance history
  components/
    common/                      # shared design-system pieces
      Logo.jsx / Logo.css
      AuthLayout.jsx / .css      # split-screen shell for login/register
      DashboardLayout.jsx / .css # sidebar + topbar shell for dashboards
      PunchGrid.jsx / .css       # the signature attendance-tile grid
      SubjectCard.jsx / .css
      StatCard.jsx / .css
    landing/
      LandingPage.jsx / .css     # role picker (Teacher / Student)
    teacher/
      TeacherLogin.jsx
      TeacherRegister.jsx / .css # register with 1+ subjects (dynamic list)
      TeacherDashboard.jsx / .css
      MarkAttendance.jsx / .css  # manual / photo / voice attendance modes
      PhotoAttendance.jsx / .css # face-detection attendance
      VoiceRollCall.jsx / .css   # voice roll call
    student/
      StudentLogin.jsx
      StudentRegister.jsx / .css # register + pick subjects
      StudentDashboard.jsx
      StudentSubjectDetail.jsx / .css
  App.jsx                        # route definitions
  main.jsx
  index.css                      # design tokens + shared utility classes
```

---

## Portals & flows

### Teacher
- **Register** — name, department, email, password, and **at least one
  subject** (add/remove subjects with a live form; the last row can't be
  removed).
- **Dashboard** — stat cards (subjects, students, average attendance) and a
  card per subject with a live attendance percentage and punch-grid preview.
- **Mark Attendance** — pick a subject, then choose how to take the roll:
  manual toggles, photo capture, or voice roll call.

### Student
- **Register** — name, roll number, email, password, and a checklist to pick
  enrolled subjects.
- **Dashboard** — overall attendance, classes attended/missed, and a card per
  enrolled subject.
- **Subject detail** — full punch-grid history and recent-sessions list for
  one subject.

---

## How the AI attendance modes work today

### Photo-based attendance (`PhotoAttendance.jsx`)
Uses `face-api.js`'s tiny face detector (bundled in `public/models/`) to find
faces in a live-captured or uploaded photo, draws a box around each, and
reports a count. Since there's no per-student face registry yet, it fills
"present" for the first *N* roster rows, where *N* is the detected count —
a working detection pipeline standing in for full identity matching until
Phase 2 is done.

### Voice roll call (`VoiceRollCall.jsx`)
Uses the browser's native `SpeechRecognition` API. Calls out each student in
turn; a spoken "present," "here," or "yes" marks them present, anything else
or silence marks them absent, and it advances automatically. This one is
feature-complete as-is — the remaining work is backend persistence, not the
recognition itself.

---

## Design system

- **Palette**: violet (`#6c5ce7`) for teacher-facing UI, aqua (`#06c7a6`) for
  student-facing UI, plus coral and amber for absent/late states.
- **Type**: Sora (display), Inter (body), JetBrains Mono (stats, roll
  numbers, percentages).
- **Signature element**: the punch grid (`PunchGrid.jsx`) — every session is
  a small colored tile, present/late/absent/no-class — used consistently
  from the landing page hero through to per-subject history.

All tokens live in `src/index.css` as CSS custom properties.
