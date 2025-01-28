import React, { useRef, useState } from "react";
import Icon from "./Icon";
import { games } from "../Data/static-data";
import { teams } from "../Data/static-data";
import Team from "./Team";

const GameSearch = ({ selectedGame, setSelectedGame }) => {
  const [selectedTag, setSelectedTag] = useState("All");
  const dialogRef = useRef();

  return (
    <>
      <dialog ref={dialogRef}>
        <div className="dialog-content">
          <div className="dialog-button">
            <button
              className="btn-variant-outline"
              onClick={() => dialogRef.current.close()}
            >
              X
            </button>
          </div>
          <div className="dialog-header">
            <h4 style={{ marginBottom: "1.5rem" }}>Game Filter</h4>
          </div>
          <div className="dialog-body">
            <div className="select-container">
              <select
                className="select-box"
                onChange={(e) => {
                  const tag = e.target.value;
                  setSelectedTag(tag);
                  setSelectedGame(
                    tag !== "All"
                      ? games.find((game) => game.tag === tag)
                      : games[0]
                  );
                  dialogRef.current.close();
                }}
              >
                <option value={"All"}>All</option>
                {games
                  .map((game) => game.tag)
                  .map((tag) => {
                    return <option value={tag}>{tag}</option>;
                  })}
              </select>
            </div>
          </div>
        </div>
      </dialog>
      <div className="game-search">
        <div className="search-result">
          <div className="select-container">
            <select
              onChange={(e) => {
                setSelectedGame(
                  games.find((game) => game.name === e.target.value)
                );
              }}
            >
              {games
                .filter((game) =>
                  selectedTag === "All" ? true : selectedTag === game.tag
                )
                .map((g) => (
                  <option value={g.name}>{g.name}</option>
                ))}
            </select>
          </div>
          <button
            className="btn-variant-outline"
            onClick={() => dialogRef.current.showModal()}
          >
            <Icon src={"/icons8-slider-48.png"} width={32} height={32} />
          </button>
        </div>
        <div className="search-content">
          <div className="search-content-teams">
            {teams
              .find((obj) => obj.gameId === selectedGame.id)
              .teams.map((t) => (
                <Team id={t.id} name={t.name} />
              ))}
          </div>
          <button
            className="btn-variant-primary"
            style={{ width: "100%", marginTop: "1rem" }}
          >
            Search now
          </button>
        </div>
      </div>
    </>
  );
};

export default GameSearch;
