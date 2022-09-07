import React from "react";

import "components/Filters/style.css";

const Filters = ({ name, isSelected }) => {
  return (
    <div className={(isSelected ? "selected " : "") + "filter-options"}>
      {name}
    </div>
  );
};

export default Filters;
