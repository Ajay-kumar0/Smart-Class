import "./StatCard.css";

const StatCard = ({ icon: Icon, label, value, tone = "violet" }) => {
  return (
    <div className="stat-card card">
      <span className={`stat-card__icon stat-card__icon--${tone}`}>
        <Icon />
      </span>
      <div>
        <p className="stat-card__value">{value}</p>
        <p className="stat-card__label">{label}</p>
      </div>
    </div>
  );
};

export default StatCard;
