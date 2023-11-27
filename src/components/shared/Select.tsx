interface SelectInterface {
  label: string;
  id: string;
  options: string[];
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

function Select({ label, id, options, Icon }: SelectInterface) {
  return (
    <div className="relative flex w-full items-center gap-2 rounded-md outline outline-1 outline-gray-500 p-2 pr-8 focus-within:outline-indigo-700 focus-within:outline-2">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <select
        id={id}
        defaultValue={options[0]}
        aria-label={label}
        className="peer appearance-none w-full h-6 bg-transparent text-sm text-gray-500 focus:outline-none focus:text-indigo-700"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {Icon && <Icon
        width={24}
        height={24}
        aria-hidden="true"
        className="absolute inset-y-2 right-2 fill-gray-500 peer-focus:fill-indigo-700"
      />}
    </div>
  );
}

export default Select;
