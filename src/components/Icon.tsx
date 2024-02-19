import sprite from "../assets/images/icons-sprite.svg";

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "120px"}
      height={props.height || "120px"}
    >
      <use xlinkHref={`${sprite}#${props.iconId}`} />
    </svg>
  );
};
