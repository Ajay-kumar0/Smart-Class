import "./PunchGrid.css";

// Renders attendance sessions as a grid of "punched" tiles, like a scantron
// or a ledger of hole-punched cards. present = filled aqua, late = amber,
// absent = coral, none = empty outline (no class that day).
const PunchGrid = ({ sessions = [], size = "md" }) => {
  return (
    <div className={`punch-grid punch-grid--${size}`}>
      {sessions.map((s) => (
        <span key={s.day} className={`punch punch--${s.status}`} title={`Day ${s.day}: ${s.status}`} />
      ))}
    </div>
  );
};

export default PunchGrid;
