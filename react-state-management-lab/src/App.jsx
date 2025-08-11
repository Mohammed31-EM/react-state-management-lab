import { useState } from 'react'
import ZombieFighterz from './components/ZombieFighters/ZombieFighters'
import './App.css'

function App() {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100)
  const [message, setMessage] = useState("");

  const [zombieFighters, setZombieFighters] = useState([
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
])

  const totalStrength = team.reduce((sum, tm) => sum + tm.strength, 0);
  const totalAgility = team.reduce((sum, agl) => sum + agl.agility, 0);

  function handleAddFighter(fighter) {
    if (money < fighter.price) {
      setMessage("Not enough money to add this fighter!");
      return;
    }
    setMessage("");
    setTeam((prev) => [...prev, fighter]);
    setZombieFighters((prev) => prev.filter((f) => f.id !== fighter.id));
    setMoney((prev) => prev - fighter.price);
  }

  function handleRemoveFighter(fighter) {
    setTeam((prev) => prev.filter((f) => f.id !== fighter.id));
    setZombieFighters((prev) => [...prev, fighter]);
    setMoney((prev) => prev + fighter.price);
    setMessage("");
  }

  return (
    <div className="app">
      <h1>Zombie Fighters</h1>

      <div className="section">
        <h2>Money: {money}</h2>
        <h2>Team Strength: {totalStrength}</h2>
        <h2>Team Agility: {totalAgility}</h2>
        <h2>Team</h2>
        {team.length === 0 ? (
          <p className="muted">Pick some team members</p>
        ) : (
          <ul className="fighters-list">
            {team.map((f) => (
              <li key={f.id} className="fighter-card">
                <img src={f.img} alt={f.name} className="fighter-img" />
                <h4>{f.name}</h4>
                <p>Paid: ${f.price}</p>
                <p>Strength: {f.strength}</p>
                <p>Agility: {f.agility}</p>
                <button onClick={() => handleRemoveFighter(f)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        {message && <p style={{ color: "red", marginTop: 8 }}>{message}</p>}
      </div>

      <h2>Fighters</h2>
      {zombieFighters.map((ZombieFighter) => (
        <ZombieFighterz
          key={ZombieFighter.id}
          name={ZombieFighter.name}
          price={ZombieFighter.price}
          strength={ZombieFighter.strength}
          agility={ZombieFighter.agility}
          img={ZombieFighter.img}
          onAdd={() => handleAddFighter(ZombieFighter)}
        />
      ))}
    </div>
  )
}

export default App
