import { ButtonProps } from "../../types";

function ButtonSvg({ Svg, onClick, label }: ButtonProps) {
  return (
    <button onClick={onClick} type="button" aria-label={label} className="min-w-6 group focus:outline-indigo-700 max-h-6">
      <Svg
        width={24}
        height={24}
        className="fill-gray-500 group-hover:fill-indigo-500 group-focus:fill-indigo-700"
      />
    </button>
  );
}

export default ButtonSvg;
