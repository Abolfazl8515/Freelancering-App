const TextField = ({ label, name, value, onchange, placeholder = "" }) => {
  return (
    <div>
      <label
        htmlFor="phoneNumber"
        className="block font-bold text-secondary-800"
      >
        {label}
      </label>
      <input
        type="number"
        id={name}
        name={name}
        value={value}
        onChange={onchange}
        className="textField__input"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
