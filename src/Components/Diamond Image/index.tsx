import type { DiamondImageProps } from "@/Types/ComponentTypes";

const DiamondImage = ({ imgUrl, extraClasses }: DiamondImageProps) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${extraClasses ? extraClasses : ""} bg-accent-very-light rounded-4xl`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="diamondClip">
          {/* Rounded square centered at (50,50), rotated 45deg => rounded diamond */}
          {/* Adjust rx/ry for more/less roundness */}
          <rect
            x="20" /* left of square */
            y="20" /* top of square */
            width="60" /* square size */
            height="60"
            rx="8" /* corner radius (increase for rounder corners) */
            ry="8"
            transform="rotate(45 50 50)" /* rotate around center (50,50) */
          />
        </clipPath>
      </defs>

      <image
        href={`${imgUrl}`}
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#diamondClip)"
      />
    </svg>
  );
};

export default DiamondImage;
