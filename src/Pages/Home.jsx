import React, { useState } from "react";
import Category from "../Components/Category";
import GameSearch from "../Components/GameSearch";
import { Navbar } from "../Components/Navbar";
import PlatformChooser from "../Components/PlatformChooser";
import { categories, games } from "../Data/static-data";
import { Link } from "react-router-dom";

const Home = () => {
  const [selectedGame, setSelectedGame] = useState(games[0]);

  return (
    <div className="App">
      <Navbar />
      <div className="big-card">
        <div
          className="grid-item"
          style={{
            borderTopRightRadius: "0px",
            borderBottomRightRadius: "0px",
          }}
        >
          <div>
            <div className="poster-circle">
              <div className="poster-circle-2">
                <div className="poster-circle-3">
                  <h1 className="poster-big">
                    Start <span>streaming</span> games differently
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="poster-small">
              gamor now has <span>stream party</span> platform
            </h4>
          </div>
          <div>
            <Link href="/" className="btn-variant-secondary rounded shadow">
              Create account
            </Link>
            <Link to="/login">Sign in</Link>
          </div>
        </div>
        <div className="grid-item center-grid-item">
          <h1>{selectedGame.name}</h1>
          <h2>Join live!</h2>
          <div
            className="rounded"
            style={{
              backgroundColor: "hsl(var(--background))",
              color: "hsl(var(--foreground))",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            {new Date().toTimeString().split(" ")[0]}
          </div>
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundImage: `url(${selectedGame.poster_url})`,
            }}
          ></div>
        </div>
        <div
          className="grid-item text-align-left"
          style={{
            borderTopLeftRadius: "0px",
            borderBottomLeftRadius: "0px",
          }}
        >
          <div className="grid-item-header">
            <span>01. </span>Chose Platform
          </div>
          <PlatformChooser />
          <div className="grid-item-header">
            <span>02. </span>Searching Game
          </div>
          <GameSearch
            selectedGame={selectedGame}
            setSelectedGame={setSelectedGame}
          />
        </div>
      </div>
      <div className="categories-section">
        <h1 className="section-title">Trending Categories</h1>
        {categories.map((category) => {
          return (
            <Category
              key={category.id}
              id={category.id}
              name={category.name}
              img_url={category.img_url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
