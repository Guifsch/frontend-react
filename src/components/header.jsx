import React from "react";

const Header = () => {
  const logo = require("../imagens/moovin_logo.png");
  return (
    <div className="header">
      <img alt="Logo da Moovin" src={logo} />
    </div>
  );
};

export default Header;
