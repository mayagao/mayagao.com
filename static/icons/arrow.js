// ArrowSVG.jsx

import React from "react";

const ArrowSVG = ({ style }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
  >
    <path
      d="M7.00001 6C6.44773 6 6 6.44772 6 7C6 7.55228 6.44773 8 7.00001 8V6ZM17 7H18C18 6.44772 17.5523 6 17 6V7ZM16 17C16 17.5523 16.4477 18 17 18C17.5523 18 18 17.5523 18 17H16ZM5.29291 17.2929C4.90236 17.6834 4.90236 18.3166 5.29291 18.7071C5.68343 19.0976 6.31658 19.0976 6.7071 18.7071L5.29291 17.2929ZM7.00001 8H17V6L7.00001 6V8ZM16 7V17H18V7H16ZM16.2929 6.2929L5.29291 17.2929L6.7071 18.7071L17.7071 7.7071L16.2929 6.2929Z"
      fill="currentColor"
    />
  </svg>
);

export default ArrowSVG;
