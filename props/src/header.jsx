import React from "react";

const Header = (props) => {
  return (
    <header>
      <div className="header-wrapper">
        <h1>{props.welcome}</h1>
      </div>
    </header>
  )
}

export default Header
