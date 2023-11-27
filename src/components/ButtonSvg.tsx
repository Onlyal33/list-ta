interface ButtonInterface {
  id?: number;
  Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

function Button({ id, Svg }: ButtonInterface) {
  return (
    <button className="min-w-8 group p-1 focus:outline-indigo-700 max-h-[32px]">
      <Svg
        width={24}
        height={24}
        className="fill-gray-500 group-hover:fill-indigo-500 group-focus:fill-indigo-700"
      />
    </button>
  );
}

export default Button;
