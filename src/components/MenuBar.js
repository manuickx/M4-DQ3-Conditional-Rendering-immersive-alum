import React from "react";

const MenuBar = ({ changeSelection, selected }) => {
  const handleClick = event => {
    changeSelection(event.target.id);
  };

  return (
    <div className="ui four item menu">
      <a
        className={"item " + (selected === "profile" ? "active" : null)}
        id="profile"
        onClick={handleClick}
      >
        <i className="user large icon" id="profile" />
      </a>

      <a
        className={"item " + (selected === "photo" ? "active" : null)}
        id="photo"
        onClick={handleClick}
      >
        <i className="photo large icon" id="photo" />
      </a>

      <a
        className={"item " + (selected === "cocktail" ? "active" : null)}
        id="cocktail"
        onClick={handleClick}
      >
        <i className="cocktail large icon" id="cocktail" />
      </a>

      <a
        className={"item " + (selected === "pokemon" ? "active" : null)}
        id="pokemon"
        onClick={handleClick}
      >
        <i className=" themeisle large icon" id="pokemon" />
      </a>
    </div>
  );
};

export default MenuBar;
