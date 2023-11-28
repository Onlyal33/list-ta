interface ButtonInterface {
  id?: number;
  Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  onClick: () => void;
}

function ButtonSvg({ id, Svg, onClick }: ButtonInterface) {
  return (
    <button onClick={onClick} type="button" className="min-w-6 group focus:outline-indigo-700 max-h-6">
      <Svg
        width={24}
        height={24}
        className="fill-gray-500 group-hover:fill-indigo-500 group-focus:fill-indigo-700"
      />
    </button>
  );
}

export default ButtonSvg;
