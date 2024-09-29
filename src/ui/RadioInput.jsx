const RadioInput = ({ label, name, id, value, checked,onChange }) => {
  return (
    <div className="flex items-center gap-x-1">
      <input
        className="w-4 h-4 accent-primary-900"
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor="OWNER">{label}</label>
    </div>
  );
};

export default RadioInput;
