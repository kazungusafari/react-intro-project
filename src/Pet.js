import React from "react";
import PropTypes from "prop-types";

const Pet = ({ name, breed, animal }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
};

Pet.propTypes = {
  name: PropTypes.string,
  animal: PropTypes.string,
  breed: PropTypes.string,
};

export default Pet;
