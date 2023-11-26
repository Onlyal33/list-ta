interface ButtonInterface {
  id: number;
  Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

function Button({ id, Svg }: ButtonInterface) {
  return (
    <button className="min-w-8 group p-1 focus:outline-indigo-700">
      <Svg
        width={24}
        height={24}
        className="fill-gray-500 hover:fill-indigo-500 group-focus:fill-indigo-700"
      />
    </button>
  );
}

export default Button;
