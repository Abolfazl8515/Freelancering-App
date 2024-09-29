const TextField = ({
  label,
  name,
  value,
  onchange,
  placeholder = "",
  dynamicStyle = null,
  direction = "rtl",
  type,
}) => {
  return (
    <div>
      <label htmlFor={name} className="block font-bold text-secondary-700">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onchange}
        className={`textField__input ${dynamicStyle}`}
        placeholder={placeholder}
        dir={direction}
        autoComplete="true"
      />
    </div>
  );
};

export default TextField;
