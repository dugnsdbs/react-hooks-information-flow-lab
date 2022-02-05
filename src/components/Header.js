import React from "react";

function Header ({isDarkMode,handleDarkModeClick}){
  return (
    <div>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    </div>
  )
}

export default Header;