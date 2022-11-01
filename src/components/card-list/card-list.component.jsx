import Card from "../card/card.component";

import "./card-list.styles.css";

const Cardlist = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} key={monster.id} />;
    })}
  </div>
);

export default Cardlist;
