interface ButtonInterface {
  id?: number;
  Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  label: string;
  onClick: () => void;
}

function ButtonResponsive({ id, Svg, label, onClick }: ButtonInterface) {
  return (
    <button onClick={onClick} className="md:min-w-full group flex justify-between items-center gap-2 p-2 focus:outline-indigo-700 border border-gray-500 rounded-md">
      <span className="sr-only text-sm text-gray-500 group-hover:text-indigo-500 group-focus:text-indigo-700 md:not-sr-only">
        {label}
      </span>
      <Svg
        width={24}
        height={24}
        className="fill-gray-500 group-hover:fill-indigo-500 group-focus:fill-indigo-700"
      />
    </button>
  );
}

export default ButtonResponsive;
