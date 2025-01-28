import React from "react";
import Icon from "./Icon";

const Team = ({ id, name }) => {
  return (
    <div className="team">
      <div className="team-id">{id}</div>
      <h4>{name}</h4>
      <div className="team-members">
        <div className="member"></div>
        <div className="member"></div>
      </div>

      <button className="btn-variant-secondary">
        <Icon src={"/icons8-mas-48.png"} width={16} height={16} />
      </button>
    </div>
  );
};

export default Team;
