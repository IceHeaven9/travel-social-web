// import PropTypes from "prop-types";

import { clx } from "../utils/clx.js";

export function Icon({ name, className }) {
  return (
    <span className={clx("material-symbols-outlined", className)}>{name}</span>
  );
}

// Icon.propTypes = {
//   name: PropTypes.string.isRequired,
// };
