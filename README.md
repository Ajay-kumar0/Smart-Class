# SmartClass — Frontend

This drops into your existing Vite + React project. It's **UI only** — no auth,
no API calls, no database. All lists (subjects, students, attendance history)
come from `src/data/dummyData.js`, which you can delete once you wire up real
data.

## 1. Install the two new dependencies

```
npm install react-router-dom lucide-react
```

## 2. Copy files in

Copy everything inside this `src/` folder into your project's `src/` folder,
overwriting `App.jsx`, `main.jsx`, `App.css`, and `index.css`.

## 3. Run it

```
npm run dev
```

## What's inside

```
src/
  main.jsx                       — mounts <App />
  App.jsx                        — all routes (react-router-dom)
  index.css                      — design tokens, fonts, shared button/input/card styles
  data/dummyData.js              — mock subjects, roster, attendance sessions

  components/
    common/
      Logo.jsx                   — brand mark
      AuthLayout.jsx              — split-screen shell for login/register pages
      DashboardLayout.jsx         — sidebar + topbar shell for dashboards
      PunchGrid.jsx                — the "punch card" attendance grid (signature UI element)
      StatCard.jsx                — small stat widget
      SubjectCard.jsx              — subject summary card w/ mini punch grid

    landing/
      LandingPage.jsx             — role picker ("I'm a Teacher" / "I'm a Student")

    teacher/
      TeacherLogin.jsx
      TeacherRegister.jsx         — dynamic "add subject" rows, min. 1 enforced in UI
      TeacherDashboard.jsx        — stats + subject cards
      MarkAttendance.jsx          — pick subject, tap present/late/absent per student

    student/
      StudentLogin.jsx
      StudentRegister.jsx         — subject-selection checklist
      StudentDashboard.jsx        — stats + subject cards
      StudentSubjectDetail.jsx    — full session history for one subject
```

## Routes

| Path | Page |
|---|---|
| `/` | Landing / role picker |
| `/teacher/login` | Teacher login |
| `/teacher/register` | Teacher register (add subjects) |
| `/teacher/dashboard` | Teacher dashboard |
| `/teacher/mark-attendance` | Mark attendance |
| `/student/login` | Student login |
| `/student/register` | Student register (pick subjects) |
| `/student/dashboard` | Student dashboard |
| `/student/subject/:subjectId` | One subject's attendance detail |

## Design notes

- **Palette**: violet `#6C5CE7` (teacher/primary), aqua `#06C7A6` (student/present),
  coral `#FF5D73` (absent), amber `#FFB238` (late) — all defined as CSS variables
  in `index.css` so you can retheme in one place.
- **Type**: Sora for headings/display, Inter for body text, JetBrains Mono for
  percentages, codes and roll numbers.
- **Signature element**: the "punch grid" — every subject's attendance is drawn
  as a grid of small punched tiles (like a scantron/ledger), reused in the
  landing hero, dashboards, and the subject detail page, so the metaphor
  (attendance = a physical record you punch in) carries through the whole app.
- Icons are from `lucide-react`.

## Wiring up real logic later

- Replace the contents of `dummyData.js` with real fetches.
- The `onSubmit` handlers on forms currently call `e.preventDefault()` only —
  hook up your auth calls there.
- `MarkAttendance`'s "Save attendance" button and the present/late/absent
  toggles just update local state — hook your API call into `setStatus` /
  the save button's `onClick`.
