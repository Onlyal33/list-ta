interface InputInterface {
  label: string,
  id: string,
  placeholder: string,
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
}

function Input({ label, placeholder, id, Icon }: InputInterface) {
  return (
    <div className="flex w-full items-center gap-2 rounded-md border border-gray-500 p-2 focus-within:border-indigo-700">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        aria-label={label}
        className="peer w-full bg-transparent text-sm placeholder:text-gray-500 focus:outline-none"
      />
      {Icon && <Icon
        width={24}
        height={24}
        aria-hidden="true"
        className="fill-gray-500 peer-focus:fill-indigo-700"
      />}
    </div>
  );
}

export default Input;
