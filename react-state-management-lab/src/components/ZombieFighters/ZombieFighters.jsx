import './ZombieFighters.css';

const ZombieFighterz = ({ name, price, strength, agility, img, onAdd }) => {
  return (
    <li className="fighter-card">
      <img src={img} alt={name} className="fighter-img" />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <p>Strength: {strength}</p>
      <p>Agility: {agility}</p>
      <button onClick={onAdd}>Add</button>
    </li>
  );
};

export default ZombieFighterz;
