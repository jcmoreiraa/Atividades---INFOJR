import React from "react";

function FavoriteIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="34"
      fill="none"
      viewBox="0 0 36 34"
    >
      <g filter="url(#filter0_d_2169_5099)">
        <rect
          width="28"
          height="26"
          x="4"
          fill="#430C07"
          rx="10"
          shapeRendering="crispEdges"
        ></rect>
        <path
          fill="#D9D9D9"
          stroke="#FFE8D5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 9.976c-1.333-2.941-6-2.628-6 1.132S18 18 18 18s6-3.133 6-6.892c0-3.76-4.667-4.073-6-1.132z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_2169_5099"
          width="36"
          height="34"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.55 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2169_5099"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_2169_5099"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default FavoriteIcon;
